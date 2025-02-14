import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Bar } from 'react-chartjs-2'
import { makeStyles, useTheme } from '@material-ui/styles'
import { colors } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
    },
}))

const Chart = (props) => {
    const { data: dataProp, labels, className, ...rest } = props

    const classes = useStyles()
    const theme = useTheme()

    const data = {
        datasets: [
            {
                label: 'This year',
                backgroundColor: theme.palette.primary.main,
                data: dataProp.thisYear,
            },
            {
                label: 'Last year',
                backgroundColor: colors.grey[200],
                data: dataProp.lastYear,
            },
        ],
        labels,
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        cornerRadius: 20,
        legend: {
            display: false,
        },
        layout: {
            padding: 0,
        },
        scales: {
            xAxes: [
                {
                    barThickness: 12,
                    maxBarThickness: 10,
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        padding: 20,
                        fontColor: theme.palette.text.secondary,
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: theme.palette.divider,
                        drawBorder: false,
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                        zeroLineColor: theme.palette.divider,
                    },
                    ticks: {
                        padding: 20,
                        fontColor: theme.palette.text.secondary,
                        beginAtZero: true,
                        min: 0,
                        maxTicksLimit: 5,
                        callback: (value) => {
                            return value > 0 ? value + 'K' : value
                        },
                    },
                },
            ],
        },
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            caretSize: 10,
            yPadding: 20,
            xPadding: 20,
            borderWidth: 1,
            borderColor: theme.palette.divider,
            backgroundColor: theme.palette.white,
            titleFontColor: theme.palette.text.primary,
            bodyFontColor: theme.palette.text.secondary,
            footerFontColor: theme.palette.text.secondary,
            callbacks: {
                title: () => {},
                label: (tooltipItem) => {
                    let label = `This year: ${tooltipItem.yLabel}`

                    if (tooltipItem.yLabel > 0) {
                        label += 'K'
                    }

                    return label
                },
            },
        },
    }

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Bar data={data} options={options} />
        </div>
    )
}

Chart.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    labels: PropTypes.array.isRequired,
}

export default Chart
