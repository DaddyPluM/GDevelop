// @flow
import * as React from 'react';
import { action } from '@storybook/addon-actions';

import muiDecorator from '../../ThemeDecorator';
import paperDecorator from '../../PaperDecorator';
import LeaderboardAppearanceDialog from '../../../GameDashboard/LeaderboardAdmin/LeaderboardAppearanceDialog';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';
import {
  fakeIndieAuthenticatedUser,
  fakeNoSubscriptionAuthenticatedUser,
} from '../../../fixtures/GDevelopServicesTestData';

export default {
  title: 'Leaderboard/LeaderboardAppearanceDialog',
  component: LeaderboardAppearanceDialog,
  decorators: [paperDecorator, muiDecorator],
};

export const WithoutSubscription = () => (
  <AuthenticatedUserContext.Provider
    value={fakeNoSubscriptionAuthenticatedUser}
  >
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
      onSave={() => action('onSave')()}
      leaderboardCustomizationSettings={{
        scoreTitle: 'Coins collected',
        scoreFormatting: {
          type: 'custom',
          prefix: '',
          suffix: ' coins',
          precision: 0,
        },
      }}
    />
  </AuthenticatedUserContext.Provider>
);

export const WithSubscription = () => (
  <AuthenticatedUserContext.Provider value={fakeIndieAuthenticatedUser}>
    <LeaderboardAppearanceDialog
      open
      onClose={() => action('onClose')()}
      onSave={() => action('onSave')()}
      leaderboardCustomizationSettings={{
        scoreTitle: 'Coins collected',
        scoreFormatting: {
          type: 'custom',
          prefix: '',
          suffix: ' coins',
          precision: 0,
        },
      }}
    />
  </AuthenticatedUserContext.Provider>
);
