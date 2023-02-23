import Card from "../card.js";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import redLikeIcon from "../../../assets/Icons/heart-red.svg";
import blackLikeIcon from "../../../assets/Icons/heart-black.svg";

import makeRequest from "../../../utils/makeRequest/index.js"

jest.mock("../../../utils/makeRequest/index.js");



describe('Card', () => {

  it('should display liked heart when heart button is clicked and blog is not liked', async() => {
    makeRequest.mockResolvedValue({});
    const props = {
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      claps: 5,
      liked: false, 
      image: 'abstract.png' ,
      redLikeIcon: redLikeIcon,
       blackLikeIcon: blackLikeIcon
    }
    render(<Card { ...props } />);
    expect(screen.getByTestId('heart').src).not.toEqual("http://localhost/heart-red.svg");
    fireEvent.click(screen.getByTestId('heart'));
    await waitFor(()=>{
      expect(screen.getByTestId('heart').src).toEqual("http://localhost/heart-red.svg");
    })
    
  })

    it('should display black heart when heart button is clicked and blog is liked', async () => {
    const props = {
      date: 'date',
      readingTime: 'readingTime',
      title: 'title',
      description: 'description',
      claps: 5,
      liked: true, 
      image: 'abstract.png' ,
      redLikeIcon: redLikeIcon,
       blackLikeIcon: blackLikeIcon
    }
    render(<Card { ...props } />);
    fireEvent.click(screen.getByTestId('heart'));
    await waitFor(()=>{
      expect(screen.queryByTestId('heart').src).toEqual("http://localhost/heart-black.svg");
    })
  })

    it('should display increments in claps when clap icon is clicked', async ()=>{
        const props = {
            date: 'date',
            readingTime: 'readingTime',
            title: 'title',
            description: 'description',
            claps: 5,
            liked: true,
            image: 'abstract.png',
            redLikeIcon: redLikeIcon,
            blackLikeIcon: blackLikeIcon
        }
        render(<Card {...props} />);
        fireEvent.click(screen.getByTestId('clap'));  
        
        await waitFor(()=>{
        expect(screen.queryByTestId('clap-count').innerHTML).toEqual("6");
        })
    })


});