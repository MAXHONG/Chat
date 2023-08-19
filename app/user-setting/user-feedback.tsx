import styles from "../components/settings.module.scss";
import styles_user from "./user.module.scss";

import SendWhiteIcon from "../icons/send-white.svg";
import { IconButton } from "../components/button";
import { AppInfo } from "../constant";

import { Input, showToast, showModal } from "../components/ui-lib";

import zBotServiceClient, {
  UserCheckResultVO,
  LocalStorageKeys,
  UserFeedbackVO,
  UserConstantVO,
} from "../zbotservice/ZBotServiceClient";

export function about() {
  const mdText = `
    欢迎来到${AppInfo.Title}！

    ${AppInfo.Title} 基于GPT3.5开发。相对于ChatGPT, 我们提供了更加舒适的交互体验，
    如Markdown格式的输入与输出编辑, 语音录入与播放结果, 一键复制/重试/删除结果等。
    
    同时我们定义了一些特定的AI角色, 如Toastmasters Copilot, 用于辅助Toastmasters的演讲；文案写手，用于辅助文案写作与润色等。
    
    我们非常重视用户隐私和数据安全。在使用${AppInfo.Title}时，我们不会后台存储或分析用户的聊天记录。
    所有的聊天记录都直接转发到OpenAI，这意味着您的对话数据将由OpenAI进行处理和存储。

    有任何问题或建议，欢迎通过 ***设置->反馈我们*** 联系我们。我们会尽快回复。
    祝畅聊愉快。
    `;

  showModal({
    title: AppInfo.Title,
    children: (
      <div className="markdown-body">
        <pre className={styles["export-content"]}>{mdText}</pre>
      </div>
    ),
  });
}

const submit = async (feedbackVO: UserFeedbackVO) => {
  console.log("feedbackVO: ", feedbackVO);

  if (feedbackVO.email === null || feedbackVO.email.trim().length === 0) {
    showToast("邮箱不可为空");
    return;
  } else if (feedbackVO.title.trim().length === 0) {
    showToast("标题不可为空");
    return;
  } else if (feedbackVO.description.trim().length === 0) {
    showToast("详细描述不可为空");
    return;
  }

  try {
    const result = await zBotServiceClient.sendFeedback(feedbackVO);
    if (result === UserCheckResultVO.success) {
      showToast("反馈已提交, 请返回");
    } else {
      showToast("反馈提交失败, 请重新提交");
    }
  } catch (error) {
    console.log("db access failed:"), error;
  }
};

export function feedback() {
  // useState: Invalid hook call, Hooks can only be called inside of the body of a function component
  // so we use class to save temp data
  let feedbackVO = new UserFeedbackVO();
  feedbackVO.email = localStorage.getItem(LocalStorageKeys.userEmail) as string;

  showModal({
    title: AppInfo.Title + "-反馈",
    children: (
      <div className={styles_user["user-feedback-body"]}>
        {feedbackVO.email === null || feedbackVO.email.trim().length === 0 ? (
          <div className={styles_user["user-feedback-body-item"]}>
            <label className={styles_user["user-feedback-body-item-label"]}>
              邮箱*
            </label>
            <input
              type="text"
              placeholder="邮箱"
              className={styles_user["edit-prompt-title"]}
              onChange={(e) => {
                feedbackVO.email = e.target.value;
              }}
            ></input>
          </div>
        ) : null}
        <div className={styles_user["user-feedback-body-item"]}>
          <label className={styles_user["user-feedback-body-item-label"]}>
            标题*
          </label>
          <input
            type="text"
            placeholder="标题"
            className={styles_user["edit-prompt-title"]}
            onChange={(e) => {
              feedbackVO.title = e.target.value;
            }}
          ></input>
        </div>
        <div className={styles_user["user-feedback-body-item"]}>
          <label className={styles_user["user-feedback-body-item-label"]}>
            详细描述*
          </label>
          <Input
            placeholder="详细描述"
            rows={10}
            className={styles_user["edit-prompt-content"]}
            onChange={(e) => {
              feedbackVO.description = e.currentTarget.value;
            }}
          ></Input>
        </div>
        <div className={styles_user["user-feedback-body-item"]}>
          <label className={styles_user["user-feedback-body-item-label"]}>
            联系电话(可选)
          </label>
          <input
            type="text"
            placeholder="电话"
            className={styles_user["edit-prompt-title"]}
            onChange={(e) => {
              feedbackVO.phone = e.target.value;
            }}
          ></input>
        </div>
      </div>
    ),
    actions: [
      <IconButton
        icon={<SendWhiteIcon />}
        type="primary"
        key=""
        text="提交"
        onClick={() => submit(feedbackVO)}
      />,
    ],
  });
}
