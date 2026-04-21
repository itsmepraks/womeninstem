const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export interface NextOccurrence {
  date: Date;
  display: string; // "Sep 2026", "Mar 2027"
  year: number;
  month: number;
}

/**
 * Given a recurring annual month, compute the next occurrence from today.
 * If the month has already passed this year, returns next year.
 */
export function getNextAnnualOccurrence(month: number, monthEnd?: number): NextOccurrence {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-12

  // If the month has already ended this year, use next year
  const endMonth = monthEnd ?? month;
  const year = currentMonth > endMonth ? currentYear + 1 : currentYear;

  const date = new Date(year, month - 1, 1);
  const monthLabel = monthEnd
    ? `${MONTH_NAMES[month - 1]}/${MONTH_NAMES[monthEnd - 1]}`
    : MONTH_NAMES[month - 1];

  return {
    date,
    display: `${monthLabel} ${year}`,
    year,
    month,
  };
}

function daysUntil(isoDate: string): number {
  const target = new Date(isoDate);
  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Format a deadline display string from days remaining.
 */
export function formatDeadlineDisplay(isoDate: string): { label: string; daysLeft: number; isExpired: boolean } {
  const days = daysUntil(isoDate);
  const target = new Date(isoDate);
  const monthLabel = MONTH_NAMES[target.getMonth()];
  const day = target.getDate();
  const year = target.getFullYear();

  return {
    label: `${monthLabel} ${day}, ${year}`,
    daysLeft: days,
    isExpired: days < 0,
  };
}
