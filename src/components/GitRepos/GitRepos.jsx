import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { repos } from 'assets/repos'
import {fetchRepos} from '../../services/api'

export class GitRepos extends Component {
    state = {
        repos: [],
        loading: false,
        error: null, 
        query: ''
    }
    componentDidMount(){
        this.fetchData()
     
    }
fetchData = async () => {
    try {
     const {data} = await fetchRepos({})
    }
    catch(error) {
      console.log(error)
    }
}
handleChangeQuery = (query) => {
    this.setState({ query: query })
}
render() {
        const { query } = this.state
  return (
    <>
        <GitHeader handleChangeQuery={this.handleChangeQuery}/>
            <GitReposList repos={ repos } />
        </>
  )
 }
}

