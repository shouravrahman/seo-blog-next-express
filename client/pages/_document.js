import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = await Document.getInitialProps(ctx)
	// 	return { ...initialProps }
	// }

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						type='module'
						src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>
					<script
						nomodule
						src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>
				</body>
			</Html>
		)
	}
}

export default MyDocument
