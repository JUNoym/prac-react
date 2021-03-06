import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'

export const Headline = (props) => {
    return (
        <div>
            <h1 className={styles.title}>
                {props.title} Page
            </h1>
            <p className={styles.description}>
                Get started by editing{' '}
                {props.children}
            </p>

            <button onClick={props.onClick}>クリック！</button>
        </div>
    )
}

