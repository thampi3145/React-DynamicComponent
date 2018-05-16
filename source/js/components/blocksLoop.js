import React, { Component } from 'react';
import HeadingBlock from './headingBlock'
import TextBlock from './textBlock'

export default class BlocksLoop extends Component {
    constructor () {
      super()
      this.getBlockComponent = this.getBlockComponent.bind(this)
    }
  
    getBlockComponent (block) {
      switch (block) {
        case 'heading':
          return <HeadingBlock key={block.id} {...block} />
  
        case 'text':
          return <TextBlock key={block.id} {...block} />
  
  
  
        default:
          return <div className='no_block_type' />
      }
    }
  
    render () {
      return (
        <div className='blocks_loop'>
          { this.getBlockComponent(this.props.title) }
        </div>
      )
    }
  }