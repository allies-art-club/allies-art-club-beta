import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {Paragraph,Link,List,ListElement} from '../Components/Styled/styled';
const Volunteer = ()=>{
    return(
        <Fragment>
            <TitleBanner
                sideSrc1={'/assets/general/starsL.png'}
                sideSrc2={'/assets/general/starsR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={'Volunteer'}
            ></TitleBanner>
            <Paragraph>Would you like to help Allie's Art Club achieve our mission to empower communities and bring art to the forefront of social progress?</Paragraph>
            <Paragraph>Do you have skills (or want to develop skills) such as fundraising project development or artistic talents that could help our cause?</Paragraph>
            <Paragraph>Here are some ways in which you could help Allie's Art Club:</Paragraph>
            <List>
                <ListElement>Start a project to raise funds or art supplies to donate</ListElement>
                <ListElement>Tell us about an art class or event you'd like to start with us</ListElement>
                <ListElement>Send us your art to be featured on our Instagram page</ListElement>
                <ListElement>Volunteer at Allie's food bank (read <Link>Allie's Food Bank</Link> for info)</ListElement>
                <ListElement>Follow us on social media and tell your friends about us!</ListElement>

            </List>
            <Paragraph>If you're interested in volunteering with us, please send an email with any ideas of how you can help to: <Link href="mailto:alliesartclub@gmail.com">alliesartclub@gmail.com</Link></Paragraph>
            <Paragraph>You can send your art to our instragram page @alliesartclub on:
                <Link>www.instagram.com/alliesartclub</Link>
            </Paragraph>
        </Fragment>
    )
}

export default Volunteer;