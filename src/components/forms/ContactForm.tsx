'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-100 border border-slate-600 dark:border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-white dark:text-slate-900"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-100 border border-slate-600 dark:border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors text-white dark:text-slate-900"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-slate-800 dark:bg-slate-100 border border-slate-600 dark:border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none text-white dark:text-slate-900"
          placeholder="Tell me about your project or just say hello!"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative overflow-hidden group"
        size="lg"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Send Message
          </div>
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
        >
          <CheckCircle className="h-5 w-5" />
          <span>Thanks for your message! I'll get back to you soon.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
        >
          <AlertCircle className="h-5 w-5" />
          <span>Something went wrong. Please try again.</span>
        </motion.div>
      )}
    </motion.form>
  )
} 