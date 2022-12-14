export type Level = {
    titulo: string;
    color:string;
    icon: 'down' | 'up';
    imc: number[],
    yourImc?: number;
}
export const levels: Level[] = [
    { titulo:'Magreza', color: '#96a3ab', icon: 'down', imc : [0, 18.5] },
    { titulo:'Normal', color: '#0ead69', icon: 'up', imc : [18.6, 24.9] },
    { titulo:  'Sobrepeso', color: '#e2b039', icon: 'down', imc : [25, 30] },
    { titulo:  'Obezidade', color: '#c3423f', icon: 'down', imc : [30.1, 99] }
];

export const calculateImc = (altura:number, peso:number) => {
    const imc = peso / (altura * altura);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
                let levelCopy: Level = {...levels[i]}

                levelCopy.yourImc = parseFloat(imc.toFixed(2));
                return levelCopy;
            }
    }
    return null
}