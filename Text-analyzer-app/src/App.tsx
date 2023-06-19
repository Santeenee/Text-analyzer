import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Homepage from './components/Homepage'
import 'inter-ui/inter.css'

function App() {
	return (
		<GeistProvider>
			<CssBaseline />
			<Homepage />
		</GeistProvider>
	)
}

export default App
