//資料標題
var labels = ['HOTEL', 'Booking', 'Trivago', 'Another'];
var total1 = 0;

var ctx = document.getElementById('chart1').getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            //預設資料
            data: [10, 20, 30, 40],
            backgroundColor: [
                //資料顏色
                "#F0F8FF",
                "#5599FF",
                "#FFFF77",
                "#FF8888"
            ],
        }],
    },
    options: {
        animation: {
            animateScale: true,
            animateRotate: true
        },
        // 關於滑過後的 顯示
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //計算總和
                    var sum = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percent = Math.round(((currentValue / sum) * 100));
                    return " " + data.labels[tooltipItem.index] + ":" + currentValue + " (" + percent + " %)";
                }
            }
        },

        //提示項目的處理
        legend: {
            display: true,
            position: 'left',
            labels: {
                generateLabels: function (chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {
                            var ds = data.datasets[0];
                            var arc = chart.getDatasetMeta(0).data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                            return {
                                text: label + " : " + value,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                index: i
                            };
                        });
                    } else {
                        return [];
                    }
                }
            }
        }
    },

});

//資料標題
var labels = ['HOTEL', 'Booking', 'Trivago', 'Another'];
var total1 = 0;

var ctx1 = document.getElementById('chart2').getContext('2d');
var pieChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            //預設資料
            data: [25, 5, 40, 30],
            backgroundColor: [
                //資料顏色
                "#9955FF",
                "#99FF99",
                "#FF7744",
                "#FF8888"
            ],
        }],
    },
    options: {
        animation: {
            animateScale: true,
            animateRotate: true
        },
        // 關於滑過後的 顯示
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //計算總和
                    var sum = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percent = Math.round(((currentValue / sum) * 100));
                    return " " + data.labels[tooltipItem.index] + ":" + currentValue + " (" + percent + " %)";
                }
            }
        },

        //提示項目的處理
        legend: {
            display: true,
            position: 'left',
            labels: {
                generateLabels: function (chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {
                            var ds = data.datasets[0];
                            var arc = chart.getDatasetMeta(0).data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                            return {
                                text: label + " : " + value,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                index: i
                            };
                        });
                    } else {
                        return [];
                    }
                }
            }
        }
    },

});

//資料標題
var labels = ['HOTEL', 'Booking', 'Trivago', 'Another'];
var total1 = 0;

var ctx2 = document.getElementById('chart3').getContext('2d');
var pieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            //預設資料
            data: [25, 50, 10, 5],
            backgroundColor: [
                //資料顏色
                "#CC0000",
                "#77FFCC",
                "#FF7744",
                "#DDDDDD"
            ],
        }],
    },
    options: {
        animation: {
            animateScale: true,
            animateRotate: true
        },
        // 關於滑過後的 顯示
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //計算總和
                    var sum = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percent = Math.round(((currentValue / sum) * 100));
                    return " " + data.labels[tooltipItem.index] + ":" + currentValue + " (" + percent + " %)";
                }
            }
        },

        //提示項目的處理
        legend: {
            display: true,
            position: 'left',
            labels: {
                generateLabels: function (chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {
                            var ds = data.datasets[0];
                            var arc = chart.getDatasetMeta(0).data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                            return {
                                text: label + " : " + value,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                index: i
                            };
                        });
                    } else {
                        return [];
                    }
                }
            }
        }
    },

});

//資料標題
var labels = ['HOTEL', 'Booking', 'Trivago', 'Another'];
var total1 = 0;

var ctx3 = document.getElementById('chart4').getContext('2d');
var pieChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            //預設資料
            data: [25, 15, 35, 25],
            backgroundColor: [
                //資料顏色
                "#CC0000",
                "#77FFCC",
                "#FF7744",
                "#DDDDDD"
            ],
        }],
    },
    options: {
        animation: {
            animateScale: true,
            animateRotate: true
        },
        // 關於滑過後的 顯示
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //計算總和
                    var sum = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percent = Math.round(((currentValue / sum) * 100));
                    return " " + data.labels[tooltipItem.index] + ":" + currentValue + " (" + percent + " %)";
                }
            }
        },

        //提示項目的處理
        legend: {
            display: true,
            position: 'left',
            labels: {
                generateLabels: function (chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {
                            var ds = data.datasets[0];
                            var arc = chart.getDatasetMeta(0).data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                            var value = chart.config.data.datasets[chart.getDatasetMeta(0).data[i]._datasetIndex].data[chart.getDatasetMeta(0).data[i]._index];

                            return {
                                text: label + " : " + value,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || chart.getDatasetMeta(0).data[i].hidden,
                                index: i
                            };
                        });
                    } else {
                        return [];
                    }
                }
            }
        }
    },

});
