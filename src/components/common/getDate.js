import moment from "moment";

export const getSubMinutes = (modifiedAt) => {
  const _modifiedAt = moment(modifiedAt).format("yyyy-MM-DD HH:mm:ss");
  const __modifiedAt = moment(_modifiedAt);
  const now = moment();
  const subMinutes = now.diff(__modifiedAt, "minutes");

  if (subMinutes < 60) {
    return `${subMinutes} 분`;
  } else if (subMinutes >= 60) {
    const subHours = now.diff(__modifiedAt, "hours");
    if (subHours >= 24) {
      const subDays = now.diff(__modifiedAt, "days");
      return `${subDays}일`;
    } else if (subHours < 24) {
      return `${subHours}시간`;
    }
  }
};
