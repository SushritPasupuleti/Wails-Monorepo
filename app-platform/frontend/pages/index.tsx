import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from './index.module.css'
import { Greet } from '../wailsjs/wailsjs/go/main/App'

const Home: NextPage = () => {
	return (
		<div className={styles['app-container']}>
			<Head>
				<title>Wails + Next.js</title>
			</Head>
			<div className={styles['app']}>
				<h1 className={styles['title']}>Wails + Next.js</h1>
			</div>
		</div>
	)
}

export default Home
