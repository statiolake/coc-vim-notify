local M = {}

local function call_coc_notify(message, level)
	level = level or 2
	vim.fn.CocAction("runCommand", "coc-vim-notify.showMessage", message, level)
end

local messages = {}

function M.setup()
	vim.notify = M.notify
	vim.api.nvim_create_autocmd("User", {
		pattern = "CocNvimInit",
		callback = function()
			for _, message in ipairs(messages) do
				call_coc_notify(message.message, message.level)
			end
		end,
		once = true,
	})
end

function M.notify(message, level)
	if vim.g.coc_service_initialized == 1 then
		call_coc_notify(message, level)
	else
		table.insert(messages, { message = message, level = level })
	end
end

return M
