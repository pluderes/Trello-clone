import { HomeRepairServiceOutlined } from '@mui/icons-material'
import { Button, useColorScheme } from '@mui/material'
import { pink } from '@mui/material/colors'
import './App.css'
import SelectCustom from './components/SelectCustom'
import { LightModeIcon } from '@mui/icons-material/LightMode'
import { DarkModeIcon } from '@mui/icons-material/DarkMode'
import { SettingsBrightnessIcon } from '@mui/icons-material/SettingsBrightness'

function App() {
  function ModeToggle() {
    const { setMode } = useColorScheme();

    const listMode = [
      {
        value: "light",
        name: "Light",
      },
      {
        value: "dark",
        name: "Dark",
      },
      {
        value: "system",
        name: "System",
      }
    ]

    const handleChangeMode = (mode) => {
      setMode(mode)
    }

    return (
      <SelectCustom label="Mode" options={listMode} event={(mode) => handleChangeMode(mode)} />
    )
  }

  return (
    <>
      <ModeToggle />
      <Button variant="contained">Hello world</Button>
      <HomeRepairServiceOutlined />
      <HomeRepairServiceOutlined color="primary" />
      <HomeRepairServiceOutlined color="secondary" />
      <HomeRepairServiceOutlined color="success" />
      <HomeRepairServiceOutlined color="action" />
      <HomeRepairServiceOutlined color="disabled" />
      <HomeRepairServiceOutlined sx={{ color: pink[500] }} />
    </>
  )
}

export default App
