import nltk
import numpy as np
from nltk.stem.porter import PorterStemmer
nltk.download('punkt')

stemmer = PorterStemmer()

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stemming(word):
    return stemmer.stem(word.lower())

def bag_of_words(tokenized_s, all_w):
    tokenized_s = [stemming(w) for w in tokenized_s]
    
    bag = np.zeros(len(all_w), dtype=np.float32)
    
    for idx, w in enumerate(all_w):
        if w in tokenized_s:
            bag[idx] = 1
    
    return bag
