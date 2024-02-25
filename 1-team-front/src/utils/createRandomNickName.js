const randomWord = {
  determiners: [
    '예쁜',
    '화난',
    '귀여운',
    '배고픈',
    '철학적인',
    '현학적인',
    '슬픈',
    '푸른',
    '비싼',
    '밝은',
  ],
  animals: [
    '호랑이',
    '비버',
    '강아지',
    '부엉이',
    '여우',
    '치타',
    '문어',
    '고양이',
    '미어캣',
    '다람쥐',
  ],
};

const createRandomNickName = () => {
  const determiner =
    randomWord.determiners[
      Math.floor(Math.random() * randomWord.determiners.length)
    ];
  const animal =
    randomWord.animals[Math.floor(Math.random() * randomWord.animals.length)];
  return `${determiner} ${animal}`;
};

export default createRandomNickName;
