import React, { useState, useRef } from 'react'
import axios from 'axios'
import useForm from '../hooks/useForm'
import validate from '../utils/FormValidation'

import Message from '../components/Message'

const Contact = () => {
	// const [ formState, setFormState ] = useState({
	// 	name    : '',
	// 	email   : '',
	// 	message : ''
	// })
	const { values, errors, handleChange, handleSubmit } = useForm(sendForm, validate)

	const [ formSubmitMessage, setFormSubmitMessage ] = useState(null)

	// reference to form
	const formRef = useRef(null)

	function resetForm() {
		Array.from(formRef.current.elements).forEach((input) => (input.value = ''))
	}

	function sendForm() {
		axios({
			method : 'POST',
			url    : '/send',
			data   : values
		}).then((response) => {
			if (response.data.status === 'success') {
				setFormSubmitMessage('success')
				resetForm()
			} else if (response.data.status === 'fail') {
				setFormSubmitMessage('fail')
				resetForm()
			}
		})
	}

	// function handleSubmit(e) {
	// 	e.preventDefault()
	// 	const { name, email, message } = formState
	// 	if (name !== '' && email !== '' && message !== '') {
	// 		axios({
	// 			method : 'POST',
	// 			url    : '/send',
	// 			data   : formState
	// 		}).then((response) => {
	// 			if (response.data.status === 'success') {
	// 				setFormSubmitMessage('success')
	// 				resetForm()
	// 			} else if (response.data.status === 'fail') {
	// 				setFormSubmitMessage('fail')
	// 				resetForm()
	// 			}
	// 		})
	// 	}
	// }

	// controlled inputs
	// const handleChange = (event) => {
	// 	const { name, value } = event.target
	// 	setFormState({
	// 		...formState,
	// 		[name] : value
	// 	})
	// }

	return (
		<React.Fragment>
			<div className='Contact showcase' data-aos='fade-up'>
				<h1>Contact</h1>
				<p className='Contact-bio'>
					Raised to the south of Austin, Xtophe Xanon photographs instilled with memory
					and darkened by nightlife. Climb up on the house and kosmonaut money will ask
					'what is all this thusness?'. Have you ever been? Can I ride? The stair spangled
					daemons are real. They are standing still. Still.{' '}
				</p>
				<form onSubmit={handleSubmit} ref={formRef} noValidate>
					<div>
						<label htmlFor='name'>Name: </label>
						<input
							type='text'
							name='name'
							value={values.name || ''}
							onChange={handleChange}
						/>
            {errors.name && <p className='error'>{errors.name}</p>}
					</div>
					<div>
						<label htmlFor='email'>Email: </label>
						<input
							type='email'
							name='email'
							value={values.email || ''}
							onChange={handleChange}
						/>
						{errors.email && <p className='error'>{errors.email}</p>}
					</div>
					<div>
						<label htmlFor='message'>Message:</label>
						<textarea
							name='message'
							rows='5'
							placeholder='Please enter your message here...'
							value={values.message || ''}
							onChange={handleChange}
						/>
            {errors.message && <p className='error'>{errors.message}</p>}
					</div>
					<div className='btn-container'>
						<button type='submit' className='btn'>
							allez
						</button>
					</div>
					{formSubmitMessage === 'success' ? (
						<Message>Thank you for reaching out, I will get back to you soon</Message>
					) : formSubmitMessage === 'fail' ? (
						<Message>
							Sorry, there was a problem with your submission, please try again later
						</Message>
					) : null}
				</form>
			</div>
		</React.Fragment>
	)
}

export default Contact
