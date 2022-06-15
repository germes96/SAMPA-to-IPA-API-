module.exports = {
  apps : [{
    script: 'app.js',
    watch: '.',
    exec_mode: "cluster",
    instances: '1',
    max_memory_restart: '500M'
  }]
};
