import Head from 'next/head'
import Image from 'next/image'
import ProjectList from '../components/ProjectList'
import styles from '../styles/Home.module.css'
import BlogPost from '../components/BlogPost'
export default function Home() {
  return (
    <>
      <BlogPost />
      <ProjectList/>
    </>
  )
}
