import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

describe('Submit feedback', () => {

    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: createFeedbackSpy },
            { sendMail: sendMailSpy }
        )

        await expect(submitFeedback.execute({
            comment: 'So many bugs',
            type: 'BUG',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without type', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            comment: 'So many bugs',
            type: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without comment', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            comment: '',
            type: 'BUG',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback with an invalid screenshot format', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            comment: 'So many bugs',
            type: 'BUG',
            screenshot: 'data:image/'
        })).rejects.toThrow()
    })

})