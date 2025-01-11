class DateHelper {
  getUntil(dateString: string) {
    const targetDate = new Date(dateString);
    const now = new Date();

    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return 'Expired';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;
  }

  getDate(dateString: string) {
    const d = new Date(dateString);
    return `${d.toDateString()} at ${d.getHours()}h ${d.getMinutes()}m`;
  }
}

export const dateHelper = new DateHelper();
