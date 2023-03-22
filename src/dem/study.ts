let chapterIdReg = /^https:\/\/lichess\.org\/study\/([A-Za-z0-9]{8})\/([A-Za-z0-9]{8})$/;
let studyIdReg = /^https:\/\/lichess\.org\/study\/([A-Za-z0-9]{8})$/;


export const list = [
  { title: 'Key squares', link: 'https://lichess.org/study/8Bu5aigE' },
  { title: 'Mined squares', link: 'https://lichess.org/study/GzYzNhAN' },
  { title: 'Triangulation', link: 'https://lichess.org/study/3SGuOVnM' }
]

export type LoadChapter = {
  matched_reg: string,
  pgn: string
}


export async function match_study(link: string) {
  let match = link.match(studyIdReg)

  if (match) {
    let matched_reg = `${match[1]}`
    let pgn = await oneStudy(match[1])

    return {
      matched_reg,
      pgn
    }
  }
  return undefined
}

export function oneChapter(study: string, chapter: string) {
  return fetch(`https://lichess.org/study/${study}/${chapter}.pgn`)
    .then(res => {
    return res.text()
  })
}

export function oneStudy(study: string) {
  return fetch(`https://lichess.org/api/study/${study}.pgn`)
  .then(res => {
    return res.text()
  })
}
