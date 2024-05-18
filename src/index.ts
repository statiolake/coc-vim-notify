import { commands, ExtensionContext, window } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  context.subscriptions.push(
    commands.registerCommand('coc-vim-notify.showMessage', async (message, level) => {
      switch (level) {
        case 5: // vim.log.levels.OFF
          break;
        case 4: // vim.log.levels.ERROR
          window.showErrorMessage(message);
          break;
        case 3: // vim.log.levels.WARN
          window.showWarningMessage(message);
          break;
        case 2: // vim.log.levels.INFO
        case 1: // vim.log.levels.DEBUG
        case 0: // vim.log.levels.TRACE
        default:
          window.showInformationMessage(message);
          break;
      }
    })
  );
}
