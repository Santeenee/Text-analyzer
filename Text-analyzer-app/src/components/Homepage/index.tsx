import { Grid, Page, Text, Textarea, useMediaQuery } from '@geist-ui/core'
import { useState, useEffect } from 'react'

export default function Homepage() {
	const [textAreaValue, setTextAreaValue] = useState<string>('')
	const [wordCount, setWordCount] = useState<number>(0)
	const [charactersCount, setCharactersCount] = useState<number>(0)
	const isXS = useMediaQuery('xs', { match: 'down' })

	useEffect(() => {
		countWords(textAreaValue)
		countCharacters(textAreaValue)
	}, [textAreaValue])

	function countWords(text: string) {
		const nWords = text?.trim().replace(/\s+/g, ' ').split(' ').length || 0
		console.log(text)
		setWordCount(nWords)
	}

	function countCharacters(text: string) {
		const nCharacters = text?.length || 0
		setCharactersCount(nCharacters)
	}

	function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
		const elem = e.target
		if (!elem) {
			return
		}
		setTextAreaValue(elem.value)
	}

	return (
		<Page style={isXS ? { margin: 0, width: '100%' } : {}}>
			<Grid.Container
				gap={1}
				alignItems="baseline"
				alignContent="flex-start"
				mb={2}
			>
				<Grid xs={24} md={12}>
					<Text h1 font="2.5rem" width="100%">
						Text Analyzer
					</Text>
				</Grid>
				<Grid.Container xs={24} sm md={12} gap={1} h="max-content" ml="0">
					<Grid xs={24} md={12}>
						<Text p width="100%" margin={0}>
							{wordCount} words
						</Text>
					</Grid>
					<Grid xs={24} md={12}>
						<Text p width="100%" margin={0}>
							{charactersCount} characters
						</Text>
					</Grid>
				</Grid.Container>
			</Grid.Container>

			<Textarea
				resize="vertical"
				w="100%"
				style={{ height: '60dvh', maxHeight: '80dvh', fontSize: '1rem' }}
				placeholder="Please enter some text"
				onChange={handleChange}
				value={textAreaValue}
				maxLength={8000}
			/>
		</Page>
	)
}
