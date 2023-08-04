import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { repos } from 'assets/repos'
import {fetchRepos} from '../../services/api'

export class GitRepos extends Component {
    state={
        repos: [],
        loading: false,
        error: null,
    }
    componentDidMount(){}


fetchRepos = async () => {
    try {
     const {data} = await fetchRepos({})
    }
    catch(error) {
      console.log(error)
    }
}

    render() {
  return (
    <>
        <GitHeader/>
            <GitReposList repos={ repos } />
        </>
  )
 }
}

