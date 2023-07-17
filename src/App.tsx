import { Button, Title } from 'kuui-react'

const App = () => {
	return (
		<div className="app">
			<div className="container">
				<div className="app__main">
					<Button dimension="small" variant="active">
						Start
					</Button>
					<div className="app_result">
						<Title>Title 1</Title>
						<Title>Title 2</Title>
						<Title>Title 3</Title>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
