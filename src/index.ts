import { commands, ExtensionContext, window } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  context.subscriptions.push(
    commands.registerCommand('coc-vim-notify.showMessage', async (message, level) => {
      switch (level) {
        case 0: // vim.log.levels.TRACE
        case 1: // vim.log.levels.DEBUG
        case 2: // vim.log.levels.INFO
          window.showInformationMessage(message);
          break;
        case 3: // vim.log.levels.WARN
          window.showWarningMessage(message);
          break;
        case 4: // vim.log.levels.ERROR
          window.showErrorMessage(message);
          break;
        case 5: // vim.log.levels.OFF
          break;
      }
    })
  );
}
