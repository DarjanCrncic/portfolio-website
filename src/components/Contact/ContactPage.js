import React from 'react'
import Page from '../Common/Page';
import PageDescription from '../Common/PageDescription';
import Title from '../Common/Title';
import ContactData from './ContactData';

const ContactPage = () => {
  return (
    <Page scroll="contact">
      <Title>Contact</Title>
      <PageDescription>
        If you have any questions for me or are interested in working with me in the future, please feel free to contact me.
      </PageDescription>
      <ContactData />
    </Page>
  )
}

export default ContactPage
