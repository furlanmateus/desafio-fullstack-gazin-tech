import { format } from 'date-fns';

export const formatDateToApi = (date: Date) => format(date, 'yyyy-MM-dd');
