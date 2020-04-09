import React, { Component, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Container, Grid, Segment, Header, Button, Label } from 'semantic-ui-react';

class Issue1 extends Component {

    render() {



        return(
            <Container text>
                <Header as='h1'>Trader Joe's: Please pay your workers hazard pay during the COVID-19 pandemic!</Header>

                <p>Grocery store workers are on the front lines of the ongoing COVID-19 pandemic. While some of us have jobs that allow us to shelter in place at home,
                grocery workers' jobs are essential to ensuring we have uninterrupted access to food and other critical supplies during this crisis. These workers are at great risk
                of being exposed to the virus, and of transmitting the virus to their loved ones.</p>

                <p>Grocery workers deserve hazard pay for risking their health to perform an essential societal function. Despite their workers' front line roles in this global health crisis, <a class="clickable_link" href="https://www.coworker.org/petitions/trader-joe-s-crew-needs-hazard-pay-now" target="_blank" rel='noopener noreferrer'>Trader Joe's has refused</a> to pay its workers hazard pay. If you're a customer of Trader Joe's, please take a few seconds to contact them using the letter below to speak up for the rights of their workers. </p>

                <Header as='h3'>Template Letter:</Header>

                <p>We have provided a template letter below. Copy the letter, click the contact button to go to the Trader Joe's contact page, and feel free to edit the letter to add a personal touch.
                On the contact page, you will have to provide your name, your location, and an email to send the letter. We recommend selecting "Other" under "Type of Feedback".</p>

                <Segment>
                    <Label attached='top' color='blue'>Feel free to add a personal touch to the template below. Please remember to be kind and civil.</Label>

                    <p>Dear Trader Joe's,</p>

                    <p>I’m writing to express my concern that Trader Joe's workers are not receiving hazard pay during the COVID-19 pandemic. These workers are on the front lines of the disease. Over the course of a single shift, they are exposed to countless people who may be infected--whether customers, co-workers, or someone in the supply chain--thereby increasing the risk to their own well being, as well as anyone else they come in contact with. These workers are unable to follow any-shelter at-home mandate, because their jobs are simply too important. Their pay should reflect this. A one-time bonus is not enough. A very small increase is not enough. These workers are people with full lives and loved ones, who are putting their lives at risk doing a job that our society needs done in order to function. It is your responsibility as an employer to provide a safe work environment for your employees, as well as for your customers. As a long-time Trader Joe's customer, I implore you to do the right thing and provide your employees with hazard pay, protective equipment, and appropriate sick leave.</p>

                    <p>Sincerely,</p>

                    <p>A concerned human</p>

                </Segment>



                <Grid>
                    <Grid.Row centered>
                        <Button color='blue' variant='primary'><a class='whitelink' href='https://www.traderjoes.com/contact-us/product-feedback' target='_blank' rel='noopener noreferrer'>Go to Contact Page</a></Button>
                    </Grid.Row>

                    <Grid.Row></Grid.Row>
                </Grid>
            </Container>
        );
    };
};

export default Issue1;
