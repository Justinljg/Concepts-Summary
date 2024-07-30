Search.setIndex({"docnames": ["ACID", "Attention", "DataLake", "OLAP", "Overfit", "Sampling", "Star", "StatTest", "Storage", "Types", "cv", "index"], "filenames": ["ACID.md", "Attention.md", "DataLake.md", "OLAP.md", "Overfit.md", "Sampling.md", "Star.md", "StatTest.md", "Storage.md", "Types.md", "cv.md", "index.md"], "titles": ["<span class=\"section-number\">7. </span>ACID", "<span class=\"section-number\">10. </span>Attention is all you need", "<span class=\"section-number\">9. </span>Data Lake", "<span class=\"section-number\">8. </span>OLAP vs. OLTP", "<span class=\"section-number\">3. </span>Overfitting and Underfitting", "<span class=\"section-number\">1. </span>Sampling", "<span class=\"section-number\">6. </span>Star &amp; Snowflake Schema", "<span class=\"section-number\">4. </span>Statistical Tests", "<span class=\"section-number\">5. </span>Types of Data Storage", "<span class=\"section-number\">2. </span>Types of Analytics", "Computer Vision", "Tome of Knowledge"], "terms": {"transact": [0, 3, 8], "ar": [0, 2, 3, 4, 5, 6, 7, 8], "often": [0, 3, 8], "compos": 0, "multipl": [0, 2, 6, 8], "statement": 0, "guarante": [0, 2, 5, 8], "each": [0, 3, 4, 5, 6, 8, 10], "i": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11], "treat": 0, "singl": [0, 6], "unit": 0, "which": [0, 2, 3, 4, 5, 6, 7, 8, 10], "either": [0, 6], "succe": 0, "complet": [0, 5, 8], "fail": [0, 7], "ani": [0, 3], "constitut": 0, "entir": 0, "databas": [0, 3], "left": 0, "unchang": 0, "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "system": [0, 3, 6, 8], "must": [0, 6], "everi": [0, 5], "situat": 0, "includ": [0, 6, 10], "power": [0, 6, 8], "failur": 0, "error": [0, 4], "crash": 0, "A": [0, 2, 4, 5, 6, 7, 8], "prevent": [0, 4], "updat": [0, 3, 6], "from": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11], "occur": [0, 3], "onli": [0, 6, 11], "partial": 0, "can": [0, 2, 3, 4, 5, 6, 8, 10], "greater": 0, "problem": [0, 2], "than": [0, 2, 3, 5, 6, 7, 8], "reject": [0, 7], "whole": [0, 5], "seri": 0, "outright": 0, "As": 0, "consequ": 0, "cannot": [0, 5], "observ": [0, 6], "progress": 0, "anoth": [0, 5], "client": [0, 3], "At": 0, "one": [0, 3, 5, 6, 8, 9], "moment": 0, "time": [0, 2, 3, 5, 6, 9], "ha": [0, 5, 6, 8], "yet": 0, "happen": 0, "next": 0, "alreadi": [0, 2], "noth": 0, "wa": 0, "cancel": 0, "ensur": [0, 5, 6], "bring": 0, "state": [0, 2], "preserv": 0, "invari": 0, "data": [0, 3, 4, 5, 6, 7, 9], "written": 0, "valid": [0, 5, 6], "accord": 0, "all": [0, 3, 8, 11], "defin": [0, 4, 6, 7, 8], "rule": 0, "constraint": 0, "cascad": 0, "trigger": 0, "combin": 0, "thereof": 0, "thi": [0, 2, 3, 4, 5, 6, 8, 10, 11], "corrupt": 0, "illeg": 0, "referenti": 0, "integr": [0, 2], "primari": 0, "kei": [0, 6], "foreign": 0, "relationship": [0, 3, 6, 8, 9], "execut": [0, 3], "concurr": 0, "e": [0, 5, 7, 8], "g": [0, 5, 7], "read": [0, 3, 8], "write": [0, 3, 6, 8], "tabl": [0, 3, 6, 8], "same": [0, 6, 8], "leav": 0, "would": [0, 3, 5, 8], "have": [0, 3, 5, 8], "been": 0, "obtain": [0, 7], "were": [0, 3, 5], "sequenti": 0, "main": 0, "goal": 0, "control": [0, 2, 4, 7, 8], "depend": [0, 3], "level": [0, 3, 6, 7], "us": [0, 2, 3, 4, 5, 6, 7, 10, 11], "effect": 0, "incomplet": 0, "might": [0, 7], "visibl": 0, "other": [0, 3, 4, 5, 11], "onc": 0, "commit": 0, "remain": 0, "even": 0, "case": [0, 5, 6, 8], "outag": 0, "usual": [0, 3, 6], "mean": [0, 3, 7], "record": [0, 3, 8], "non": [0, 4, 6, 8], "volatil": 0, "memori": [0, 8], "storag": [2, 6, 10, 11], "repositori": 2, "hold": [2, 8], "larg": [2, 3, 7, 8], "amount": [2, 3], "its": [2, 3, 6, 9], "nativ": 2, "raw": 2, "format": 2, "store": [2, 3, 6, 8], "optim": [2, 3, 9], "scale": [2, 8], "terabyt": 2, "petabyt": 2, "The": [2, 3, 4, 5, 6, 7, 11], "typic": [2, 3, 6, 7, 8], "come": 2, "heterogen": [2, 8], "sourc": [2, 3, 6, 8, 11], "mai": [2, 4], "structur": [1, 2, 8], "semi": [2, 8], "unstructur": [2, 8], "idea": 2, "everyth": 2, "origin": [2, 7], "untransform": 2, "approach": [2, 6, 8], "differ": [2, 6, 7, 8], "tradit": [2, 3], "warehous": [2, 3, 6], "transform": 2, "process": [2, 3, 6, 8, 10], "ingest": 2, "advantag": [2, 5], "never": 2, "thrown": 2, "awai": 2, "becaus": [2, 3, 5], "especi": [2, 5, 6], "big": [2, 8], "environ": [2, 8], "when": [2, 3, 5, 6, 7, 8], "you": [2, 3, 4, 5, 6, 7, 11], "know": 2, "advanc": [2, 5], "what": 2, "insight": [2, 8, 9], "avail": [2, 3, 8], "user": [2, 3, 7, 8], "explor": [2, 9], "creat": [2, 6, 8], "own": 2, "queri": [2, 3, 8], "faster": [2, 8], "etl": 2, "tool": [2, 8], "more": [2, 4, 5, 6, 8, 9, 11], "flexibl": 2, "challeng": [2, 3, 5], "lack": 2, "schema": [2, 3, 11], "descript": [2, 6, 9, 10], "metadata": 2, "make": [2, 3, 7, 8], "hard": 2, "consum": 2, "semant": [2, 8], "consist": [2, 3, 6, 8], "across": [2, 8], "perform": [2, 3, 4, 6, 7, 8], "analysi": [2, 3, 7, 8, 9, 10], "unless": 2, "highli": [2, 3], "skill": 2, "analyt": [2, 3, 5, 8, 11], "It": [2, 3, 6, 7, 8], "qualiti": [2, 10], "go": 2, "without": [2, 3, 6, 8], "proper": 2, "govern": 2, "access": [2, 5, 8], "privaci": 2, "issu": [2, 8], "inform": [2, 3, 6, 8, 10], "who": 2, "best": [2, 5], "wai": [2, 3, 6, 8, 10], "relat": [2, 3, 6, 8, 11], "By": 2, "itself": [2, 6], "doe": 2, "provid": [2, 3, 5, 6, 8, 9], "holist": 2, "view": 2, "organ": [2, 3, 8], "becom": 2, "dump": 2, "ground": 2, "actual": 2, "analyz": [2, 7, 8, 9, 10], "mine": [2, 9], "azur": 2, "build": 2, "solut": [2, 3], "follow": [1, 2, 3, 5], "servic": [2, 3, 7, 8], "offer": [2, 8], "hd": 2, "manag": [2, 3, 6, 8], "full": 2, "spectrum": 2, "open": 2, "cloud": [2, 8], "enterpris": 2, "hyperscal": 2, "hadoop": 2, "compat": 2, "demand": [2, 8], "job": 2, "simplifi": [2, 4], "onlin": [3, 8], "technologi": 3, "busi": [3, 6, 8], "support": [3, 4, 6], "complex": [3, 4, 5], "neg": 3, "affect": 3, "call": [3, 5, 8], "These": [3, 6, 8], "enter": 3, "thei": [3, 5, 6, 8, 9], "contain": [3, 6], "great": 3, "deal": [3, 7, 8], "valuabl": 3, "howev": [3, 5], "design": [3, 6, 7], "therefor": 3, "retriev": [3, 5, 8], "answer": [3, 5], "costli": 3, "term": [3, 6, 7], "effort": 3, "help": [3, 4, 5, 8], "extract": [3, 7, 10], "intellig": 3, "heavi": 3, "low": 3, "workload": 3, "consid": [3, 5, 6], "scenario": 3, "need": [3, 6, 11], "ad": [3, 6, 8], "hoc": [3, 6], "rapidli": 3, "your": [3, 5, 8], "want": [3, 5], "simpl": 3, "gener": [3, 4, 8, 10], "report": [3, 6, 8], "number": [3, 4, 6], "aggreg": [3, 9], "allow": [3, 5], "get": [3, 8], "fast": 3, "result": [3, 5, 6, 7, 8], "wherea": 3, "constantli": 3, "through": [3, 7], "flow": 3, "variou": [3, 5, 8, 9, 11], "refresh": [3, 6], "much": [3, 5, 8], "slower": 3, "interv": [3, 5], "better": [3, 7, 8], "suit": 3, "strateg": 3, "decis": [3, 4], "rather": [3, 6, 8], "immedi": 3, "respons": 3, "chang": [3, 8, 9], "also": [3, 4, 6, 7, 8], "some": [3, 5, 8], "cleans": 3, "orchestr": 3, "plan": [3, 5], "keep": 3, "up": [3, 8], "date": [3, 6], "unlik": 3, "normal": [3, 7], "found": 3, "model": [1, 3, 4, 6, 9, 10], "tend": 3, "multidimension": 3, "difficult": [3, 5], "imposs": 3, "directli": 3, "map": [3, 8], "entiti": [3, 6, 8], "object": [3, 8, 10], "orient": [3, 8], "where": [3, 8], "attribut": 3, "column": [3, 6, 8], "instead": 3, "star": [3, 11], "snowflak": [3, 11], "place": [3, 6, 8], "comput": [3, 8], "refer": [3, 6, 7], "interact": [3, 8], "dai": 3, "oper": [3, 8], "infer": [3, 7], "track": [3, 8], "": [3, 5, 6, 8], "activ": [3, 6], "payment": 3, "receiv": 3, "custom": [3, 6, 8], "made": [3, 8], "supplier": 3, "product": [3, 6, 7, 8, 9], "move": 3, "inventori": 3, "order": [3, 5, 6], "taken": 3, "deliv": 3, "event": [3, 6], "repres": [3, 5, 10], "themselv": 3, "dimens": 3, "numer": [3, 6], "valu": [3, 4, 6, 7, 8], "choos": [3, 6, 7, 8], "effici": [3, 5, 6, 8], "them": [3, 4, 7], "applic": [3, 8, 10], "architectur": [1, 3, 8], "tangibl": 3, "delai": 3, "impact": [3, 9], "alwai": [3, 6], "good": [3, 4, 5, 6, 8], "handl": [3, 4], "over": [3, 6], "although": 3, "except": 3, "well": [3, 5, 8], "sql": [3, 8], "server": [3, 8], "base": [3, 5, 7, 8, 9], "against": 3, "reli": [3, 5, 6], "calcul": [3, 6], "million": 3, "individu": [3, 4], "veri": [3, 5], "resourc": [3, 5, 8], "intens": 3, "slow": 3, "caus": 3, "down": 3, "block": 3, "conduct": [3, 5], "most": [3, 6], "de": 3, "join": 3, "name": [3, 6], "convent": 3, "ters": 3, "succinct": 3, "increas": [3, 4, 10], "coupl": 3, "dba": 3, "develop": [3, 7, 11], "histori": 3, "indefinit": 3, "too": [3, 4], "lead": [3, 4], "common": [3, 6, 8], "maintain": 3, "relev": 3, "window": 3, "current": [3, 6], "fiscal": 3, "year": 3, "offload": 3, "histor": [3, 9], "mart": 3, "In": [3, 4, 5, 6, 7, 8], "meet": 3, "core": 3, "requir": [3, 4, 6, 10], "virtual": [3, 8], "machin": [3, 4], "mysql": [3, 8], "postgresql": [3, 8], "train": 4, "poor": 4, "generliaz": 4, "There": [4, 5, 7], "regularis": 4, "techniqu": [4, 6, 9], "paramet": [4, 7], "adjust": [4, 9], "less": [4, 5, 6, 7], "fine": 4, "detail": [4, 6], "respect": [4, 6], "algorithm": [4, 9, 10], "random": 4, "forest": 4, "classifi": [4, 6], "n_estim": 4, "tree": [4, 8], "reduc": [4, 6, 10], "max_depth": 4, "specifi": [4, 8], "maximum": 4, "depth": 4, "limit": [4, 5], "learn": 4, "intric": 4, "pattern": [4, 10], "thu": 4, "min_samples_split": 4, "minimum": 4, "sampl": [4, 7, 11], "split": [4, 7], "intern": [4, 5], "node": [4, 8], "vector": 4, "svm": 4, "c": 4, "regular": [4, 5], "trade": 4, "off": 4, "between": [4, 6, 7, 9], "maxim": 4, "margin": 4, "minim": 4, "classif": 4, "smaller": [4, 5], "impos": 4, "stronger": 4, "influenc": 4, "point": 4, "boundari": 4, "kernel": 4, "gamma": 4, "If": [4, 5, 6, 7], "re": [4, 7], "linear": 4, "like": [4, 5, 6, 8], "radial": 4, "basi": 4, "function": 4, "rbf": 4, "smooth": 4, "smoother": 4, "avoid": [4, 5], "overli": 4, "chapter": 5, "question": 5, "sim24": 5, "type": [5, 11], "exampl": [5, 6, 7, 9], "shown": 5, "below": 5, "randomli": [5, 7], "select": 5, "subset": 5, "popul": [5, 7, 9], "method": [5, 7], "member": [5, 6], "exactli": 5, "equal": 5, "chanc": 5, "being": 5, "implement": 5, "practic": 5, "To": [5, 6], "prerequisit": 5, "list": [5, 8], "contact": [5, 6], "collect": [5, 8], "necessari": 5, "size": [5, 6, 7], "work": [5, 6, 8], "lot": 5, "studi": [5, 9], "easili": [5, 6, 8], "probabl": 5, "research": 5, "k": 5, "determin": [5, 7], "essenti": [5, 8], "should": 5, "cyclic": 5, "period": 5, "divid": [5, 7, 10], "group": [5, 7], "known": [5, 7], "among": 5, "form": 5, "step": 5, "cost": 5, "wide": [5, 6, 10], "geograph": 5, "spread": [5, 8], "properli": 5, "otherwis": 5, "high": [5, 8], "extern": 5, "reflect": [5, 6], "characterist": [5, 6], "larger": [5, 6], "disadvantag": 5, "strong": 5, "particularli": 5, "stage": 5, "mini": 5, "represent": [5, 10], "upon": 5, "bias": 5, "homogen": [5, 8], "subpopul": 5, "strata": 5, "plural": 5, "stratum": 5, "specif": [5, 6, 7, 8, 10], "race": 5, "gender": 5, "ident": 5, "locat": [5, 8], "etc": [5, 6], "estim": 5, "statist": [5, 9, 11], "measur": [5, 6, 7], "sub": 5, "divers": 5, "generaliz": 5, "undercoverag": 5, "bia": 5, "explan": 5, "sci24": 5, "scibbr": 5, "methodologi": 5, "volum": [5, 8], "2024": 5, "url": 5, "http": 5, "www": 5, "scribbr": 5, "com": 5, "simplilearn": 5, "top": 5, "65": 5, "analyst": 5, "interview": 5, "tutori": 5, "matur": 6, "adopt": 6, "fact": 6, "describ": [6, 10], "thing": 6, "peopl": 6, "concept": [6, 8], "ll": 6, "find": 6, "act": 6, "uniqu": 6, "identifi": 6, "sale": [6, 9], "stock": 6, "balanc": 6, "exchang": 6, "rate": [6, 7], "temperatur": [6, 9], "repetiti": 6, "addit": 6, "categori": [6, 8], "color": 6, "set": [6, 8], "mimic": 6, "bi": 6, "load": 6, "perspect": 6, "longer": 6, "filter": 6, "propag": 6, "chain": 6, "travers": 6, "appli": 6, "field": 6, "pane": 6, "present": 6, "author": 6, "intuit": 6, "experi": [6, 7], "just": 6, "two": [6, 7, 9], "possibl": 6, "hierarchi": 6, "span": 6, "appropri": [6, 7], "manner": 6, "email": 6, "address": [6, 8], "phone": 6, "latest": 6, "detect": [6, 10], "overwritten": 6, "supplementari": 6, "row": [6, 8], "new": [6, 8, 10], "had": 6, "increment": 6, "achiev": [6, 7], "version": [6, 7, 8], "doesn": 6, "t": [6, 7], "surrog": 6, "rang": 6, "startdat": 6, "enddat": 6, "possibli": 6, "flag": 6, "iscurr": 6, "For": [6, 7, 8], "adventur": 6, "three": [6, 9], "resel": 6, "ship": 6, "deliveri": 6, "imit": 6, "summar": 6, "inact": 6, "desktop": 6, "With": 6, "path": [6, 8], "simultan": [6, 9], "produc": 6, "visual": [6, 10], "plot": 6, "overcom": 6, "instanc": [6, 8], "dax": 6, "b": 7, "experiment": 7, "compar": 7, "variabl": [7, 9], "commonli": [7, 8], "market": 7, "outcom": 7, "click": 7, "convers": 7, "engag": 7, "particip": 7, "expos": 7, "modifi": 7, "treatment": 7, "both": [7, 8], "predefin": [7, 8], "metric": 7, "whether": [7, 8], "signific": 7, "fundament": 7, "z": 7, "hypothesi": 7, "about": [7, 8], "varianc": 7, "n": 7, "30": 7, "assess": 7, "distribut": [7, 8, 9], "unknown": 7, "small": 7, "null": 7, "h0": 7, "altern": 7, "h1": 7, "assum": 7, "while": [7, 8], "assumpt": 7, "python": 7, "librari": 7, "scipi": 7, "stat": 7, "statsmodel": 7, "chosen": 7, "pass": 7, "p": 7, "interpret": 7, "0": 7, "05": 7, "conclud": 7, "import": [7, 10], "panda": 7, "pd": 7, "datafram": 7, "control_data": 7, "df": 7, "control_metr": 7, "treatment_data": 7, "treatment_metr": 7, "t_statist": 7, "p_valu": 7, "ttest_ind": 7, "output": 7, "print": 7, "els": 7, "tabular": 8, "so": 8, "reorgan": 8, "mani": 8, "compris": 8, "those": 8, "least": 8, "certain": 8, "index": 8, "easier": 8, "search": 8, "nosql": 8, "program": 8, "interfac": 8, "exist": [8, 10], "rdbm": 8, "give": 8, "abil": 8, "atom": 8, "isol": 8, "durabl": 8, "acid": [8, 11], "complianc": 8, "file": 8, "sever": 8, "physic": 8, "out": 8, "replic": 8, "part": 8, "network": 8, "underli": 8, "hardwar": 8, "run": 8, "o": 8, "built": 8, "public": 8, "privat": 8, "hybrid": 8, "charg": 8, "how": [8, 9], "bandwidth": 8, "scalabl": 8, "deploi": 8, "softwar": [8, 11], "do": 8, "languag": 8, "focu": 8, "action": [8, 9], "logic": 8, "imag": [8, 10], "alphanumer": 8, "graph": 8, "theori": 8, "edg": 8, "connect": 8, "interconnect": 8, "webpag": 8, "social": 8, "media": 8, "sparql": 8, "declar": 8, "protocol": 8, "examin": [8, 9], "let": 8, "friend": 8, "pagerank": 8, "shortest": 8, "digit": [8, 10], "cabinet": 8, "easi": 8, "purpos": 8, "financi": 8, "commerc": 8, "catalog": 8, "person": [8, 11], "recommend": [8, 9], "mongodb": 8, "cassandra": 8, "redi": 8, "cach": 8, "frequent": 8, "emploi": 8, "arrai": 8, "link": 8, "binari": 8, "hash": 8, "document": 8, "usag": 8, "bank": 8, "platform": 8, "websit": 8, "dbm": 8, "secur": 8, "factor": 8, "On": 8, "premis": 8, "v": [8, 11], "decid": 8, "central": 8, "feder": 8, "unifi": 8, "add": 8, "vertic": 8, "horizont": 8, "accommod": 8, "growth": 8, "past": 9, "ic": 9, "cream": 9, "flavor": 9, "trend": 9, "predict": 9, "understand": 9, "futur": 9, "forecast": 9, "prescript": 9, "suggest": 9, "cours": 9, "simul": 9, "price": 9, "univari": 9, "summari": 9, "height": 9, "bivari": 9, "vari": 9, "togeth": 9, "correl": 9, "multivari": 9, "investig": 9, "advertis": 9, "book": 11, "encompass": 11, "ai": 11, "serv": 11, "review": 11, "revisit": 11, "previous": 11, "learnt": 11, "collat": 11, "content": 11, "meant": 11, "overfit": 11, "underfit": 11, "test": 11, "olap": 11, "oltp": 11, "lake": 11, "acquisit": 10, "involv": 10, "captur": 10, "camera": 10, "scanner": 10, "enhanc": 10, "improv": 10, "contrast": 10, "nois": 10, "remov": 10, "artifact": 10, "restor": 10, "degrad": 10, "blur": 10, "distort": 10, "segment": 10, "region": 10, "correspond": 10, "featur": 10, "manipul": 10, "compact": 10, "meaning": 10, "mathemat": 10, "recogn": 10, "quantifi": 10, "synthesi": 10, "compress": 10, "transmiss": 10, "varieti": 10, "medic": 10, "remot": 10, "sens": 10, "multimedia": 10, "english": 1, "french": 1, "translat": 1, "competit": 1, "space": 1, "attent": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"acid": 0, "atom": 0, "consist": 0, "isol": 0, "durabl": 0, "data": [2, 8, 11], "lake": 2, "olap": 3, "v": 3, "oltp": 3, "azur": 3, "overfit": 4, "underfit": 4, "sampl": 5, "simpl": 5, "random": 5, "systemat": 5, "cluster": 5, "stratifi": 5, "refer": 5, "star": 6, "snowflak": 6, "schema": 6, "normal": 6, "slowli": 6, "chang": 6, "dimens": 6, "type": [6, 8, 9], "1": 6, "scd": 6, "2": 6, "role": 6, "plai": 6, "limit": 6, "statist": 7, "test": 7, "storag": 8, "databas": 8, "us": 8, "exampl": 8, "consider": 8, "analyt": 9, "tome": 11, "knowledg": 11, "analyst": 11, "engin": 11, "comput": 10, "vision": 10, "attent": 1, "i": 1, "all": 1, "you": 1, "need": 1, "encod": 1, "decod": 1, "stack": 1, "deep": 11, "learn": 11}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"ACID": [[0, "acid"]], "Atomicity": [[0, "atomicity"]], "Consistency": [[0, "consistency"]], "Isolation": [[0, "isolation"]], "Durability": [[0, "durability"]], "Attention is all you need": [[1, "attention-is-all-you-need"]], "Encoder and Decoder Stacks": [[1, "encoder-and-decoder-stacks"]], "Data Lake": [[2, "data-lake"]], "OLAP vs. OLTP": [[3, "olap-vs-oltp"]], "OLAP": [[3, "olap"]], "OLTP": [[3, "oltp"]], "Azure for OLTP": [[3, "azure-for-oltp"]], "Overfitting and Underfitting": [[4, "overfitting-and-underfitting"]], "Sampling": [[5, "sampling"]], "Simple random sampling": [[5, "simple-random-sampling"]], "Systematic sampling": [[5, "systematic-sampling"]], "Cluster sampling": [[5, "cluster-sampling"]], "Stratified sampling": [[5, "stratified-sampling"]], "References": [[5, "references"]], "Star & Snowflake Schema": [[6, "star-snowflake-schema"]], "Star Schema": [[6, "star-schema"]], "Normalization": [[6, "normalization"]], "Snowflake Schema": [[6, "snowflake-schema"]], "Slowly changing dimensions": [[6, "slowly-changing-dimensions"]], "Type 1 SCD": [[6, "type-1-scd"]], "Type 2 SCD": [[6, "type-2-scd"]], "Role-playing dimensions": [[6, "role-playing-dimensions"]], "Limitations": [[6, "limitations"]], "Statistical Tests": [[7, "statistical-tests"]], "Types of Data Storage": [[8, "types-of-data-storage"]], "Types of Database": [[8, "types-of-database"]], "Databases use, examples and considerations": [[8, "databases-use-examples-and-considerations"]], "Types of Analytics": [[9, "types-of-analytics"]], "Computer Vision": [[10, "computer-vision"]], "Tome of Knowledge": [[11, "tome-of-knowledge"]], "Data Analyst": [[11, null]], "Data Engineer": [[11, null]], "Deep Learning": [[11, null]]}, "indexentries": {}})