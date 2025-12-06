#!/usr/bin/lua
print("Content-Type: application/json\n")

local success, msg = os.remove("/etc/sonwrt_token")

if success then
  print('{"status":"deleted"}')
else
  print('{"status":"error", "message":"' .. (msg or "Unknown error") .. '"}')
end
