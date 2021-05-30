const typeExaminations = ['analise_clinica', 'imagem'] as const

type TypeExamination = typeof typeExaminations[number]

export { typeExaminations, TypeExamination }
