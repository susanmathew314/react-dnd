import { FC, useState, useEffect } from 'react'
import { Container } from './Container'

export const Example: FC = () => {
	// Avoid rendering on server because the big data list is generated
	const [shouldRender, setShouldRender] = useState(false)
	useEffect(() => setShouldRender(true))
	return <>{shouldRender && <Container />}</>
}
