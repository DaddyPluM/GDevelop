// @flow
import { t } from '@lingui/macro';
import * as React from 'react';
import { type StorageProvider, type SaveAsLocation } from '../index';
import DownloadFileSaveAsDialog from './DownloadFileSaveAsDialog';
import SaveAlt from '@material-ui/icons/SaveAlt';

/**
 * "Storage" allowing to download a copy of the game.
 * Used for the web-app.
 */
export default ({
  internalName: 'DownloadFile',
  name: t`Download a copy`,
  renderIcon: props => <SaveAlt fontSize={props.size} />,
  hiddenInOpenDialog: true,
  createOperations: ({ setDialog, closeDialog }) => ({
    onSaveProjectAs: async (
      project: gdProject,
      saveAsLocation: ?SaveAsLocation, // Unused - everything is done in memory.
      options
    ) => {
      options.onStartSaving();

      return new Promise(resolve => {
        setDialog(() => (
          <DownloadFileSaveAsDialog
            onDone={() => {
              closeDialog();
              resolve({ wasSaved: false, fileMetadata: null });
            }}
            project={project}
          />
        ));
      });
    },
  }),
}: StorageProvider);
