export type HeaderIcon = "search" | "friendAdd" | "setting";

export type SvgIcon =
  | "tailLessArrowRight"
  | "chat"
  | "feed"
  | "friends"
  | "profile"
  | "search"
  | "setting"
  | "twinkle"
  | "userAdd"
  | "dogFace"
  | "face"
  | "expandLeft"
  | "expandUp"
  | "expandDown"
  | "close"
  | "fillTwinkle"
  | "payment"
  | "paymentHistory"
  | "filledPin"
  | "pin"
  | "femail"
  | "exit"
  | "filledAddRound"
  | "filledCloseRound"
  | "chatPlus"
  | "userClose"
  | "userRemove"
  | "sort"
  | "filledStar"
  | "star"
  | "menu"
  | "sendButton"
  | "filledRemove"
  | "addComment";

export type ResData = {
  result: string;
  message: string;
  error_code: string;
};
