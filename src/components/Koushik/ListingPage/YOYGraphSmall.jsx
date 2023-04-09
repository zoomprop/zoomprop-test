import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function convertToPercentage(num) {
  return (num * 100).toFixed(0)
}

export default function YOYGraphSmall({ item }) {
  const theme = useTheme()
  const data = [
    {
      name: '0',
      YOY: convertToPercentage(item.nextYoy1),
    },
    {
      name: '1Y',
      YOY: convertToPercentage(item.yoy1),
    },
    {
      name: '3Y',
      YOY: convertToPercentage(item.yoy3),
    },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            background: '#000',
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
        >
          <p className="label">{`${label} : ${payload[0].value}%`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <Box
      sx={{
        [theme.breakpoints.up('md')]: {
          height: '50px',
        },
        height: '150px',
      }}
    >
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6be29c" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6be29c" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="5"
            stroke="#363838"
            horizontal={false}
          />
          <XAxis dataKey="name" tickLine={false} stroke="#5d5e5e" />
          <YAxis tickLine={false} stroke="#5d5e5e" />
          <Tooltip
            cursor={false}
            wrapperStyle={{
              backgroundColor: '#000',
              border: '1px solid red',
              borderRadius: '5px',
            }}
            contentStyle={{
              fontSize: '14px',
              color: '#333',
            }}
            content={<CustomTooltip />}
            active={true}
          />

          <Area
            type="monotone"
            dataKey="YOY"
            stroke="#6be29c"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
