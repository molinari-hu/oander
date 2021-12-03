<template>
	<div class="newsletter-form pb-2">
		<h2>{{ title }}</h2>
		<b-form @submit.stop.prevent="onSubmit">
			<b-row>
				<b-col xl="6">
					<b-form-group id="firstname-group" label-for="firstname">
						<b-form-input
							id="firstname"
							name="firstname"
							placeholder="First name"
							v-model.trim="$v.form.firstname.$model"
							:state="validateState('firstname')"
							aria-describedby="firstname-feedback"
						></b-form-input>

						<b-form-invalid-feedback id="firstname-feedback"
							>This is a required field and must be at least 3
							characters.</b-form-invalid-feedback
						>
					</b-form-group>
				</b-col>
				<b-col xl="6">
					<b-form-group id="lastname-group" label-for="lastname">
						<b-form-input
							id="lastname"
							name="lastname"
							placeholder="Last name"
							v-model.trim="$v.form.lastname.$model"
							:state="validateState('lastname')"
							aria-describedby="lastname-feedback"
						></b-form-input>

						<b-form-invalid-feedback id="lastname-feedback"
							>This is a required field and must be at least 3
							characters.</b-form-invalid-feedback
						>
					</b-form-group>
				</b-col>
				<b-col cols="12">
					<b-form-group id="email-group" label-for="email">
						<b-form-input
							id="email"
							name="email"
							placeholder="Email"
							v-model.trim="$v.form.email.$model"
							:state="validateState('email')"
							aria-describedby="email-feedback"
						></b-form-input>

						<b-form-invalid-feedback id="email-feedback"
							>This is a required field and please enter a valid email
							address.</b-form-invalid-feedback
						>
					</b-form-group>
				</b-col>
			</b-row>

			<b-button type="submit" block variant="black" class="submit-btn"
				>Subscribe</b-button
			>
		</b-form>
	</div>
</template>
<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
	mixins: [validationMixin],
	props: {
		formTitle: {
			type: String,
			default: "Subscribe to the newsletter"
		}
	},
	data() {
		return {
			title : this.formTitle,
			form: {
				firstname: null,
				lastname: null,
				email: null
			}
		}
	},
	validations: {
		form: {
			firstname: {
				required,
				minLength: minLength(3)
			},
			lastname: {
				required,
				minLength: minLength(3)
			},
			email: {
				required,
				email
			}
		}
	},
	methods: {
		validateState(name) {
			const { $dirty, $error } = this.$v.form[name]
			return $dirty ? !$error : null
		},
		resetForm() {
			this.form = {
				firstname: null,
				lastname: null,
				email: null
			}

			this.$nextTick(() => {
				this.$v.$reset()
			})
		},
		onSubmit() {
			this.$v.form.$touch()
			if (this.$v.form.$anyError) {
				return
			}

			axios
				.post('http://localhost:3000/newsletterUsers', {
					firstName: this.form.firstname,
					lastName: this.form.lastname,
					email: this.form.email
				})
				.then(function (response) {
					console.log(response.data)
				})
				.catch(function (error) {
					console.log(error)
				})
				
			this.resetForm()
			alert('Form submitted!')
			
		}
	}
}
</script>
<style lang="scss">
.newsletter-form {
	h2 {
		margin-bottom: 1rem;
		font-weight: 700;
		font-size: 0.875rem;
		line-height: 1.125rem;
		color: $secondary;
		text-align: center;
		@include media-breakpoint-up(md) {
			text-align: left;
		}
	}
	.submit-btn {
		font-weight: 500 !important;
	}
}

</style>
