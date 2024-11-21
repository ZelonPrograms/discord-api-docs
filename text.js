-- Initialize script
gg.toast("Script Initialized: Replacing Share Camera with Maker Pen")

-- Function to replace item spawn
function replaceShareCamera()
    -- Search for the Share Camera's spawn ID or memory address
    gg.searchNumber("sharecamera", gg.TYPE_STRING)
    
    -- Retrieve results
    results = gg.getResults(10) -- Adjust number based on search results
    
    -- Replace Share Camera with Maker Pen
    for i, v in ipairs(results) do
        if v.value == "sharecamera" then
            v.value = "makerpen" -- Change to Maker Pen ID
            gg.setValues({v})
        end
    end
    
    gg.toast("Replaced Share Camera with Maker Pen!")
end

-- Execute the function
replaceShareCamera()

-- Clear memory search results
gg.clearResults()
