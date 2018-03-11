import { createSelector } from 'reselect';

const getNumberOfEntriesToShow = ({leaderboard}) => leaderboard.showEntriesCount;
const getEntries = ({leaderboard}) => leaderboard.entries;

export const getEntriesToShow = createSelector(
  [ getNumberOfEntriesToShow, getEntries ],
  (numberToShow, entries) => entries.slice(0, numberToShow)
);

export const getTopThree = createSelector(
  getEntriesToShow,
  (entries) => entries.slice(0, 3)
);

export const getExceptTopThree = createSelector(
  getEntriesToShow,
  (entries) => entries.slice(3)
);

export const getTotalEntries = createSelector(
  [ getEntries ],
  ( entries) => entries.length
);
