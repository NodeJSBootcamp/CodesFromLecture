"use client"
import { usePathname } from 'next/navigation'
import { ResponsiveLine, Serie } from '@nivo/line'
import useLineData from '@/hook/useLineData'

const data = [
    {
      "id": "japan",
      "color": "hsl(242, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 133
        },
        {
          "x": "helicopter",
          "y": 282
        },
        {
          "x": "boat",
          "y": 240
        },
        {
          "x": "train",
          "y": 180
        },
        {
          "x": "subway",
          "y": 83
        },
        {
          "x": "bus",
          "y": 268
        },
        {
          "x": "car",
          "y": 48
        },
        {
          "x": "moto",
          "y": 1
        },
        {
          "x": "bicycle",
          "y": 222
        },
        {
          "x": "horse",
          "y": 241
        },
        {
          "x": "skateboard",
          "y": 60
        },
        {
          "x": "others",
          "y": 132
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(271, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 223
        },
        {
          "x": "helicopter",
          "y": 51
        },
        {
          "x": "boat",
          "y": 61
        },
        {
          "x": "train",
          "y": 198
        },
        {
          "x": "subway",
          "y": 251
        },
        {
          "x": "bus",
          "y": 203
        },
        {
          "x": "car",
          "y": 113
        },
        {
          "x": "moto",
          "y": 45
        },
        {
          "x": "bicycle",
          "y": 184
        },
        {
          "x": "horse",
          "y": 102
        },
        {
          "x": "skateboard",
          "y": 176
        },
        {
          "x": "others",
          "y": 296
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(339, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 153
        },
        {
          "x": "helicopter",
          "y": 106
        },
        {
          "x": "boat",
          "y": 48
        },
        {
          "x": "train",
          "y": 192
        },
        {
          "x": "subway",
          "y": 179
        },
        {
          "x": "bus",
          "y": 202
        },
        {
          "x": "car",
          "y": 128
        },
        {
          "x": "moto",
          "y": 78
        },
        {
          "x": "bicycle",
          "y": 114
        },
        {
          "x": "horse",
          "y": 233
        },
        {
          "x": "skateboard",
          "y": 267
        },
        {
          "x": "others",
          "y": 273
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(27, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 65
        },
        {
          "x": "helicopter",
          "y": 41
        },
        {
          "x": "boat",
          "y": 61
        },
        {
          "x": "train",
          "y": 78
        },
        {
          "x": "subway",
          "y": 67
        },
        {
          "x": "bus",
          "y": 165
        },
        {
          "x": "car",
          "y": 283
        },
        {
          "x": "moto",
          "y": 252
        },
        {
          "x": "bicycle",
          "y": 260
        },
        {
          "x": "horse",
          "y": 281
        },
        {
          "x": "skateboard",
          "y": 253
        },
        {
          "x": "others",
          "y": 1
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(280, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 63
        },
        {
          "x": "helicopter",
          "y": 74
        },
        {
          "x": "boat",
          "y": 126
        },
        {
          "x": "train",
          "y": 142
        },
        {
          "x": "subway",
          "y": 216
        },
        {
          "x": "bus",
          "y": 197
        },
        {
          "x": "car",
          "y": 271
        },
        {
          "x": "moto",
          "y": 229
        },
        {
          "x": "bicycle",
          "y": 3
        },
        {
          "x": "horse",
          "y": 36
        },
        {
          "x": "skateboard",
          "y": 241
        },
        {
          "x": "others",
          "y": 62
        }
      ]
    }
  ]
  
const LineChart = () => {
    const router = usePathname()

    return (
        <div style={{ "height": "500px", "width": "100%" }}>

            <p>{router}</p>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            /> 
        </div>
    )
}

export default LineChart;
