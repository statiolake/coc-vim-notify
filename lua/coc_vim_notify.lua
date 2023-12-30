local M = {}

function M.notify(message, level)
	if vim.g.coc_service_initialized == 1 then
		level = level or 2
		vim.fn.CocAction("runCommand", "coc-vim-notify.showMessage", message, level)
	else
		-- fall back to print()
		print(message)
	end
end

return M
