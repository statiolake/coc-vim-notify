local M = {}

function M.notify(message, level)
	level = level or "info"
	vim.fn.CocAction("runCommand", "coc-vim-notify.showMessage", message, level)
end

return M
