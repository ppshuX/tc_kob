scp dist/js/*.js tcserver:tc_kob/acapp/
scp dist/css/*.css tcserver:tc_kob/acapp/

ssh tcserver 'cd tc_kob/acapp && ./rename.sh'
