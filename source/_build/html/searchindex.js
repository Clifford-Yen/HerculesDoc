Search.setIndex({"docnames": ["index", "rst/compiling", "rst/input/analysis", "rst/input/building", "rst/input/damping", "rst/input/dimension", "rst/input/drm", "rst/input/inputFile", "rst/input/material", "rst/input/output", "rst/input/planewaves", "rst/input/source", "rst/input/time", "rst/input/topography", "rst/miscellaneous", "rst/output/mesh", "rst/output/outputFile", "rst/output/planes", "rst/output/stations", "rst/overview", "rst/references", "rst/running"], "filenames": ["index.rst", "rst/compiling.rst", "rst/input/analysis.rst", "rst/input/building.rst", "rst/input/damping.rst", "rst/input/dimension.rst", "rst/input/drm.rst", "rst/input/inputFile.rst", "rst/input/material.rst", "rst/input/output.rst", "rst/input/planewaves.rst", "rst/input/source.rst", "rst/input/time.rst", "rst/input/topography.rst", "rst/miscellaneous.rst", "rst/output/mesh.rst", "rst/output/outputFile.rst", "rst/output/planes.rst", "rst/output/stations.rst", "rst/overview.rst", "rst/references.rst", "rst/running.rst"], "titles": ["Welcome to Hercules\u2019 documentation!", "Compiling", "Analysis", "Building", "Damping", "Dimension", "Domain Reduction Method (DRM) Implementation", "Input file", "Material", "Output settings", "Plane Waves", "Source", "Time and Frequency", "Topography", "Miscellaneous", "Mesh coordinates output for a subdomain", "Output file", "Plane outputs", "Station outputs", "Overview", "References", "Running"], "terms": {"overview": 0, "disclaim": 0, "octre": [0, 5, 6], "dimens": [0, 6, 7, 13], "compil": [0, 8], "prerequisit": 0, "user": [0, 8, 9, 14], "mk": 0, "procedur": 0, "side": 0, "note": [0, 3, 5, 6, 7, 8, 9, 18], "appl": 0, "silicon": 0, "mac": 0, "run": [0, 1, 4, 6, 7, 9, 15], "basic": 0, "usag": [0, 7], "open": [0, 1, 7, 15, 17], "mpi": [0, 1, 15], "input": [0, 3, 6, 9, 15, 16, 17, 21], "file": [0, 3, 5, 6, 9, 11, 15, 17, 18, 21], "rule": [0, 8, 15], "paramet": [0, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 16, 17, 18], "refer": [0, 6, 9], "search": 0, "page": [0, 19], "To": [1, 5, 6, 8, 9, 14, 15, 21], "hercul": [1, 2, 3, 4, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 21], "you": [1, 6, 8, 9, 12, 14, 15, 16, 17, 21], "need": [1, 6, 7, 8, 9], "have": [1, 5, 6, 8, 9, 19, 21], "gnu": 1, "scientif": [1, 7, 20], "librari": [1, 8], "gsl": 1, "instal": [1, 21], "If": [1, 4, 6, 7, 8, 9], "haven": 1, "t": [1, 8, 10, 12, 20], "them": [1, 8, 9, 16], "easiest": 1, "wai": [1, 8, 21], "do": [1, 6, 8, 14], "so": [1, 6, 8, 9, 15, 17, 18, 19], "i": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21], "via": 1, "homebrew": 1, "assum": [1, 2, 21], "your": [1, 7, 8, 19, 21], "machin": [1, 21], "all": [1, 5, 6, 7, 8, 17, 18, 19], "type": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "follow": [1, 5, 6, 8, 9, 12, 15, 17], "command": [1, 4, 9, 21], "termin": 1, "one": [1, 8, 11, 14, 17], "brew": 1, "although": 1, "ar": [1, 3, 5, 6, 7, 8, 9, 12, 14, 15, 17, 18, 19], "some": [1, 7, 8, 14], "predefin": 1, "system": [1, 8, 21], "configur": 1, "": [1, 7, 8, 12, 13, 18, 20], "veri": [1, 19], "like": [1, 7], "find": [1, 8, 14, 19], "insuffici": 1, "As": [1, 5, 7, 13, 14, 19], "result": [1, 5, 6, 7, 8, 9, 14], "recommend": [1, 8], "write": [1, 7, 8, 9, 15, 17], "own": [1, 19], "next": [1, 8, 15, 17], "befor": [1, 7, 8, 9], "For": [1, 3, 5, 6, 7, 8, 9, 14, 15, 17, 18, 19, 21], "exampl": [1, 3, 6, 7, 8, 9, 15, 18, 21], "line": [1, 3, 4, 5, 6, 7, 8, 9, 18], "can": [1, 2, 3, 4, 6, 8, 9, 12, 13, 15, 17, 21], "written": [1, 3, 5, 8, 9, 15, 17, 19], "us": [1, 2, 3, 4, 6, 8, 9, 12, 14, 15, 17, 19, 20, 21], "intel": 1, "base": [1, 3, 7, 13, 16, 19, 20], "definit": [1, 15, 17, 18], "main": 1, "setup": 1, "cflag": 1, "g": [1, 6, 7], "ggdb": 1, "o3": 1, "flag": 1, "cvm": 1, "io": 1, "relat": [1, 6, 9, 15, 17, 18, 19], "io_cppflag": 1, "dusecvmdb": 1, "dscec": 1, "dprocpernod": 1, "4": [1, 8, 15, 18, 20, 21], "ifeq": 1, "mpi_dir": 1, "usr": 1, "local": [1, 5, 6], "mpi_includ": 1, "includ": [1, 2, 4, 6, 7, 8, 9, 10, 13, 20], "openmpi": 1, "ompi": 1, "cxx": 1, "cc": 1, "bin": 1, "mpicc": 1, "mpicxx": 1, "ld": 1, "cxxflag": 1, "dmpich_ignore_cxx_seek": 1, "wall": 1, "cppflag": 1, "d_largefile_sourc": 1, "d_file_offset_bit": 1, "64": [1, 15], "ldflag": 1, "lib": 1, "libgsl": 1, "endif": 1, "lgslcbla": 1, "lgsl": 1, "indent": [1, 7], "makefil": 1, "should": [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 21], "tab": 1, "space": [1, 6, 7, 8, 9], "copi": [1, 19], "code": [0, 1, 15, 17, 19], "block": 1, "abov": [1, 6, 8, 21], "make": [1, 7, 8, 14, 19], "sure": [1, 7], "replac": [1, 6, 8, 12], "cd": 1, "folder": [1, 6, 7, 9, 15, 17, 18, 21], "simpli": [1, 6, 8], "cleanal": 1, "now": [1, 14, 21], "set": [1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 15, 16, 17, 18], "equip": 1, "m1": 1, "m2": 1, "soc": [1, 20], "here": [1, 5, 8, 9], "successfulli": 1, "nativ": 1, "support": 1, "The": [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15, 17, 19, 21], "locat": [1, 3, 8, 9, 21], "under": [1, 2, 4, 10, 11, 21], "opt": 1, "chang": [1, 8, 21], "accordingli": 1, "option": [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13], "last": [1, 9, 17], "step": [1, 6, 9, 12, 17, 18], "might": [1, 5], "arch": 1, "arm64": 1, "armmac": 1, "l": [1, 20], "warn": 1, "thing": 1, "work": [1, 7, 8, 21], "intend": [1, 14], "And": [1, 5, 6, 12], "ye": [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15, 18], "combin": 1, "thi": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19], "section": [1, 2, 4, 6, 8, 9, 10, 11, 15, 16, 17, 18], "just": [1, 7], "correct": [1, 8], "variabl": [1, 17], "altern": [1, 21], "unam": 1, "determin": [1, 12], "m": [1, 18, 19], "architectur": 1, "an": [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 18, 19, 20], "shell": 1, "tr": 1, "A": [1, 7, 8, 9, 11, 13, 20], "z": [1, 8, 13, 15, 17, 18], "darwin": 1, "els": 1, "stiffness_calculation_method": 2, "string": [2, 3, 4, 7, 10, 13], "descript": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "stiff": [2, 9], "calcul": [2, 6, 8, 13], "method": [2, 5, 7], "possibl": [2, 4, 8, 9, 10, 13], "convent": [2, 14], "effect": [2, 4, 6, 9, 20], "howev": [2, 19], "we": [2, 7, 8, 12, 19, 21], "longer": [2, 6], "recent": 2, "project": [2, 19], "sinc": [2, 6, 7, 8, 12, 19], "its": [2, 19], "perform": [2, 20], "concern": 2, "go": [2, 6, 7, 20], "deprec": [2, 5], "valu": [2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14], "perman": 2, "same": [2, 5, 6, 8, 9, 15, 17], "reason": [2, 14], "use_progressive_mesh": 2, "boolean": [0, 2, 4, 7, 9], "whether": [2, 3, 4, 8, 9, 13], "util": [2, 12, 21], "progress": [2, 9], "mesh": [0, 2, 7, 8, 16, 17, 20], "techniqu": 2, "more": [2, 3, 6, 9, 14, 19], "effici": [2, 19, 20], "1": [2, 7, 8, 9, 13, 14, 15, 18, 20], "enabl": 2, "futur": [2, 5], "confirm": [], "include_nonlinear_analysi": 2, "No": [2, 3, 4, 7, 8, 9, 10, 13, 20], "consid": [2, 3, 13], "simul": [2, 3, 8, 9, 12, 13, 19, 20], "geostatic_loading_time_sec": 2, "geostatic_cushion_time_sec": 2, "approximate_geostatic_st": 2, "initi": 2, "stress": 2, "state": 2, "k_o": 2, "sin": 2, "phi": 2, "coeffici": 2, "later": [2, 8], "earth": 2, "pressur": 2, "rest": [2, 5, 8], "material_plasticity_typ": 2, "rate_independ": 2, "independ": [], "seem": [], "typo": [], "material_model": 2, "linear": 2, "vonmises_ep": 2, "vonmises_fao": [], "vonmises_fam": 2, "vonmises_bah": 2, "vonmises_ba": 2, "vonmises_boh": [], "vonmises_bo": [], "vonmises_gqh": 2, "vonmises_mkz": 2, "vonmises_ro": 2, "druckerprag": 2, "mohrcoulomb": 2, "error_toler": 2, "float": [2, 3, 4, 5, 6, 7, 8, 10, 12, 13], "backbone_errtol": 2, "stiff_damp": 2, "freq_stiff_damp": 2, "tension_cutoff": 2, "remov": 2, "tensil": 2, "onli": [2, 3, 4, 6, 7, 8, 9, 14], "affect": [2, 8], "mohr": 2, "coulomb": 2, "drucker": 2, "prager": 2, "materi": [2, 3, 7, 15], "model": [2, 7, 20], "material_properties_count": 2, "integ": [2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 18, 19], "no_substep": 2, "material_properties_list": 2, "multipl": [2, 3, 5, 6, 7, 8, 9, 11], "number": [2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15, 17, 18, 21], "format": [2, 3, 5, 6, 7, 8, 9, 16], "include_build": 3, "number_of_build": 3, "min_octant_size_m": 3, "surface_shift_m": 3, "buildings_n_factor": [], "consider_fixed_bas": 3, "fixedbase_input_dt": 3, "fixedbase_input_dir": 3, "path": [3, 7, 8, 9, 10, 11, 13, 21], "fixedbase_input_sufix": 3, "fixedbase_input_startindex": 3, "building_properti": 3, "min_x": [3, 6, 9], "max_x": [3, 6, 9], "min_i": [3, 6, 9], "max_i": [3, 6, 9], "depth": [3, 5, 6, 8, 9], "height": 3, "vp_build": 3, "vs_build": 3, "rho_build": 3, "vp_foundat": 3, "vs_foundat": 3, "rho_found": 3, "type_of_damp": [4, 7], "bkt2": [4, 7], "none": 4, "etc": [3, 7, 14], "simulation_velocity_profile_freq_hz": 4, "use_parametric_q_factor": 4, "equival": [], "use_infinite_qk": 4, "parametric_q_factor_const": 4, "parametric_q_factor_alpha": 4, "parametric_q_factor_beta": 4, "the_threshold_damp": 4, "the_threshold_vp_over_v": 8, "do_damping_statist": 4, "region_origin_latitude_deg": [5, 6, 7], "latitud": [5, 8, 9], "degre": [5, 8, 9], "left": [5, 8], "bottom": [5, 8], "region_origin_longitude_deg": [5, 6], "longitud": [5, 8, 9], "region_depth_shallow_m": 5, "start": [3, 5, 8, 12], "meter": [5, 6, 8], "region": [5, 8], "part": [5, 7], "2": [5, 7, 8, 9, 10, 13, 15, 18, 19], "analysi": [5, 6, 7, 20], "box": [5, 6], "creat": [5, 6, 7, 15, 17, 18], "offset": 5, "region_length_east_m": 5, "length": [5, 12], "from": [3, 4, 5, 6, 8, 9, 17, 19, 20], "east": [5, 6, 8], "boundari": [5, 8, 9], "region_length_north_m": 5, "north": [5, 6, 8, 9], "region_depth_deep_m": 5, "limit": [4, 5, 8], "domain_surface_corn": 5, "coordin": [0, 5, 6, 7, 8, 13, 16, 17], "four": [5, 15], "data": [3, 5, 6, 8, 9, 15, 17, 20], "mani": [3, 5, 7, 8, 9], "first": [3, 5, 7, 8, 9, 15, 17, 18], "contain": [5, 8, 9, 11, 18], "inform": [5, 6, 8, 9, 13, 19], "three": [5, 6, 17, 20], "counterclockwis": [], "These": [5, 6], "also": [5, 7, 8, 9, 12, 17, 19, 21], "sourc": [0, 5, 6, 7, 19], "reduct": [5, 7], "check": 5, "capabl": 6, "implement_drm": 6, "drm_directori": 6, "directori": [3, 6, 7, 13, 21], "want": [6, 7, 9, 21], "store": [6, 9, 13, 16], "e": [6, 7, 8], "outputfil": 6, "name": [3, 6, 7, 8, 9, 15, 17, 18], "part0": 6, "part1": 6, "part2": 6, "manual": 6, "There": [6, 7], "execut": [6, 21], "sequenti": [6, 15], "which": [1, 6, 7, 8, 9, 17, 19], "choos": 6, "within": [6, 8, 9], "which_drm_part": 6, "assign": [6, 8], "explain": [6, 7, 8], "document": [6, 7, 19], "neglect": 6, "except": 6, "In": [6, 7, 8, 15, 17, 18, 20], "would": [6, 7, 8, 9], "gener": [6, 8, 9, 16, 17, 18, 20], "end": [6, 12, 20], "small": 6, "sec": 6, "simulation_end_time_sec": [6, 12, 17], "displac": [6, 9, 17, 20], "node": [6, 12, 15], "save": [6, 9], "nonlinear": [6, 7, 20], "don": [6, 8], "unless": 6, "forc": 6, "abaqu": 6, "get": [6, 12], "instead": 6, "drm_edges": 6, "edg": 6, "pleas": [6, 7, 19], "two": [6, 9], "part1_delta_t": 6, "part1_simulation_tim": 6, "simulation_delta_time_sec": [6, 12, 17, 18], "respect": [6, 15, 17], "delta_t_used_in_part1_in_second": 6, "simulation_time_used_in_part1_in_second": 6, "mention": [6, 13, 21], "drm_print_rat": 6, "output": [0, 4, 6, 7], "mean": [6, 7, 8, 9, 19], "everi": [6, 9, 16], "distanc": 6, "origin": [6, 8, 9, 17, 19], "drm_offset_x": 6, "x": [6, 8, 9, 16, 18], "direct": [6, 8, 9, 17], "drm_offset_i": 6, "y": [6, 8, 9, 15, 17, 18], "south": [6, 8], "posit": [6, 8, 17, 18, 19], "while": [6, 14], "west": [6, 8], "both": [6, 15, 18], "still": [6, 8], "bigger": [3, 6, 9, 13], "than": [3, 4, 6, 7, 8, 9, 12, 13, 14], "between": [6, 7, 8, 13], "absorb": 6, "condit": [2, 3, 4, 6, 7, 8, 9, 10, 13], "abc": 6, "drm_boundari": 6, "five": 6, "when": [2, 4, 7, 8, 9, 14, 15, 18], "see": [7, 15, 17, 18], "planes_input_fil": [7, 9], "inputfil": [7, 8, 21], "istanbul_material_model": 7, "output_mesh": [7, 9], "0": [3, 4, 7, 8, 9, 12, 13, 14, 15, 17, 18], "40": 7, "69146389": 7, "number_profile_lay": [7, 8], "8": [7, 8, 15, 18], "profile_lay": [7, 8], "2880": 7, "1800": 7, "2200": 7, "100": [7, 8, 20], "1000": [7, 8, 9], "3600": 7, "2250": 7, "2300": 7, "2000": 7, "4000": 7, "2500": 7, "2350": 7, "3000": [7, 8], "4320": 7, "2700": 7, "2400": 7, "4640": [7, 8], "2900": 7, "2450": 7, "5000": [7, 8], "5770": 7, "3490": 7, "2600": 7, "10000": 7, "6390": 7, "3500": 7, "20000": 7, "6790": 7, "3920": 7, "2800": 7, "parameter_nam": 7, "parameter_valu": 7, "parameter_value1": 7, "parameter_value2": 7, "parameter_value3": 7, "either": 7, "point": [7, 8, 9, 11, 17, 18], "take": [7, 14], "notat": 7, "0e": 7, "05": 7, "ani": [3, 7, 8, 14], "restrict": 7, "how": [3, 7, 8, 16, 19], "place": [7, 8], "equal": 7, "sign": 7, "prefer": 7, "similarli": [7, 8], "among": 7, "order": [7, 8], "necessari": [7, 8], "below": [7, 8, 18], "each": [7, 8, 9, 15], "row": [7, 17], "column": [7, 8], "appear": 7, "new": 7, "specifi": [7, 9, 18], "doe": [7, 8], "exist": 7, "other": [7, 14], "were": 7, "develop": [7, 8, 19], "accept": 7, "most": 7, "mandatori": 7, "few": 7, "realli": [7, 19], "cover": [7, 8], "essenti": 7, "understand": [7, 8, 9, 19], "explan": 7, "feel": 7, "free": [7, 20], "leav": 7, "One": 7, "dimension": [7, 20], "layer": 7, "profil": [7, 15], "istanbul": [2, 7], "basin": [7, 20], "defin": [3, 7, 8, 9, 12, 15, 17, 18], "domain": [7, 8, 12, 13, 19, 20], "surfac": [3, 7, 20], "corner": [7, 8], "drm": 7, "subdomain": [0, 7, 16], "station": [0, 3, 7, 16], "plane": [0, 7, 16], "misc": 7, "damp": [7, 8], "time": [7, 9, 13, 17, 18, 19], "frequenc": [7, 13], "topographi": [7, 20], "build": 7, "implement": 7, "cvmdb_input_fil": 8, "crustal": 8, "structur": 8, "databas": [8, 9], "special": 8, "By": 8, "provid": 8, "z_top": 8, "vp": [8, 15], "v": [8, 15], "rho": [8, 15], "qp": 8, "q": 8, "half": [7, 8], "veloc": [2, 7, 9, 12, 15, 20], "compression": 8, "shear": [8, 12], "wave": [7, 8, 12, 19, 20], "second": [8, 12, 15, 17, 18], "densiti": 8, "kg": 8, "3": [8, 15, 17, 18, 20], "factor": 8, "default": [2, 3, 4, 8, 9, 10, 12, 13], "basin_material_model": [], "basin_input_fil": 8, "requir": [2, 3, 4, 7, 8, 9, 10, 13], "text": [8, 9, 13, 16, 17, 19], "describ": 8, "basin_origin_latitude_deg": 8, "basin_origin_longitude_deg": 8, "extens": 8, "import": [8, 15, 17], "number_of_x_point": 8, "number_of_y_point": 8, "number_of_z_point": 8, "alwai": [8, 14], "repeat": 8, "ascend": 8, "complet": [], "6": [8, 18, 20], "50": 8, "150": 8, "5": [8, 18], "200": 8, "250": 8, "increment": 8, "differ": [8, 16, 17, 19, 20], "unit": 8, "total": 8, "13": 8, "unfortun": [8, 16], "univers": [8, 20], "read": [3, 8, 9, 15, 16, 17], "equat": 8, "properti": [3, 8, 15], "therefor": 8, "modifi": [8, 14], "quak": [8, 19, 21], "forward": [8, 21], "function": [8, 14], "getbasinmaterialproperti": 8, "math": 8, "h": [8, 12, 20], "int": [8, 20], "cvmpayload_t": 8, "g_prop": 8, "doubl": [8, 15, 17], "z_m": 8, "2140": 8, "125": 8, "320": 8, "19": [8, 18], "sqrt": 8, "return": [8, 14], "re": 8, "after": [8, 17, 18], "print": [4, 9], "mesh_etree_output_fil": 9, "output_parallel": 9, "summari": 9, "stat": 9, "output_stats_fil": 9, "control": 9, "fals": [4, 8, 9, 14], "output_displac": [7, 9], "output_veloc": 9, "ignor": 9, "output_displacement_fil": [7, 9], "output_velocity_fil": 9, "simulation_output_r": 9, "rate": 9, "etre": 9, "true": [9, 14], "txt": 9, "ask": [8, 9], "anoth": [7, 9, 15], "up": [9, 19, 20], "mesh_coordinates_for_matlab": [9, 15], "extra": 9, "mesh_corners_matlab": [9, 15], "mesh_coordinates_directory_for_matlab": [9, 15], "where": [3, 9, 12, 13, 15, 17, 18, 19], "min_z": 9, "max_z": 9, "vertic": 9, "plan": 9, "view": 9, "observ": [9, 18], "number_output_st": [9, 18], "output_stations_print_r": [9, 18], "print_station_veloc": [9, 18], "print_station_acceler": [9, 18], "acceler": 9, "regardless": 9, "output_stations_directori": [9, 18], "output_st": [9, 18], "grid": [9, 17], "number_output_plan": [9, 17], "output_planes_print_r": [9, 17], "output_planes_directori": [9, 17], "output_plan": [9, 17], "x_lat": 9, "y_lon": 9, "z_depth": 9, "dx": [9, 17], "nx": [9, 17], "dy": [9, 17], "ny": [9, 17], "strk": 9, "dp": 9, "along": [8, 9, 17], "strike": 9, "angl": 9, "measur": 9, "clockwis": [5, 9], "dip": 9, "softening_factor": 8, "soften": 8, "stand": 11, "event": [11, 20], "earthquak": [11, 19, 20], "It": [3, 4, 8, 11, 13, 17], "fault": 11, "region_azimuth_leftface_deg": 11, "source_directori": 11, "source_directory_output": 11, "simulation_start_time_sec": 12, "simulation_wave_max_freq_hz": [4, 12], "maximum": [12, 13, 21], "hz": 12, "simulation_node_per_wavelength": 12, "per": 12, "wavelength": 12, "simulation_shear_velocity_min": 12, "minimum": [3, 12, 13], "smaller": 12, "explicit": 12, "fem": [12, 13], "element": [8, 12, 13, 15, 19, 20], "size": [3, 8, 12, 13], "v_": [8, 12, 13, 15], "n_p": [12, 13], "f_": [12, 13], "max": [12, 13], "formula": 12, "express": 12, "frac": [12, 13, 17, 19], "min": [12, 13], "h_": [12, 13], "deriv": 12, "onc": [12, 15, 17], "delta": [8, 12], "p": [10, 12], "include_topographi": 13, "computation_method": 13, "vt": 13, "maximum_octant_level": 13, "topographybase_zcoord": 13, "type_of_etre": 13, "sqd": 13, "topoprahy_directori": [], "finit": [19, 20], "group": 19, "carnegi": [19, 20], "mellon": [19, 20], "solv": 19, "larg": [19, 20], "scale": [19, 20], "propag": [19, 20], "problem": [14, 19], "visit": 19, "github": 19, "nowher": 19, "usabl": 19, "hard": 19, "test": [8, 19], "aim": 19, "final": 19, "everyth": 19, "background": 19, "knowledg": 19, "theori": 19, "prioriti": 19, "maintain": 19, "clifford": 19, "yen": 19, "am": [19, 20], "owner": 19, "nor": 19, "due": [], "right": [], "distribut": [], "date": [], "interest": 8, "contact": [], "That": 19, "largest": [13, 19], "specif": 19, "n": [13, 19, 20, 21], "31": 19, "why": 19, "becaus": 19, "cubic": 19, "tu": 20, "yu": 20, "ram\u00edrez": 20, "guzm\u00e1n": 20, "j": 20, "bielak": 20, "o": 20, "ghatta": 20, "k": 20, "ma": 20, "d": 20, "r": 20, "hallaron": 20, "2006": 20, "visual": 20, "approach": 20, "parallel": 20, "supercomput": 20, "sc": 20, "06": [8, 20], "proc": 20, "acm": 20, "ieee": 20, "conf": 20, "high": 20, "comput": [4, 8, 20], "network": 20, "storag": 20, "societi": 20, "novemb": 20, "tampa": 20, "fl": 20, "15": [8, 20], "pp": 20, "doi": 20, "10": 20, "1109": 20, "32": 20, "taborda": 20, "l\u00f3pez": 20, "karaoglu": 20, "urban": 20, "2010": 20, "speed": 20, "lab": 20, "technic": 20, "report": 20, "cmu": 20, "pdl": 20, "109": 20, "2011": 20, "memori": 20, "intern": 20, "friction": 20, "geophys": 20, "76": 20, "t131": 20, "t145": 20, "1190": 20, "geo2011": 20, "0019": 20, "azizzadeh": 20, "roodpish": 20, "khoshnevi": 20, "cheng": 20, "2016": 20, "evalu": 20, "southern": 20, "california": 20, "seismic": 20, "through": [16, 20], "record": 20, "geophi": 20, "205": 20, "1342": 20, "1364": 20, "1093": 20, "gji": 20, "ggw085": 20, "2014": 20, "ground": 20, "motion": 20, "valid": 20, "2008": 20, "chino": 20, "hill": 20, "bull": 20, "seismol": 20, "104": 20, "1876": 20, "1898": 20, "1785": 20, "0120130266": 20, "2013": 20, "103": 20, "131": 20, "156": [8, 20], "0120110325": 20, "restrepo": 20, "serrano": 20, "mez": 20, "jaramillo": 20, "realist": 20, "colombian": 20, "Andes": 20, "case": [7, 8, 20], "studi": 20, "aburra": 20, "vallei": 20, "antioquia": 20, "204": 20, "1801": 20, "1816": 20, "ggv556": 20, "virtual": 20, "fictiti": 20, "analyz": 20, "irregular": 20, "num": 20, "meth": 20, "eng": 20, "7": [8, 18, 20], "504": 20, "533": 20, "1002": 20, "nme": 20, "4756": 20, "2009": 20, "soil": 20, "psolv": 21, "actual": 21, "alreadi": 21, "proper": [13, 21], "call": 21, "could": 21, "add": 21, "power": 21, "mpirun": 21, "numprocess": 21, "process": 21, "core": 21, "thread": 21, "depend": 21, "current": [2, 21], "drmbox_noelem_halfwidth_ew": [6, 10], "drmbox_noelem_halfwidth_n": [6, 10], "drmbox_noelem_depth": [6, 10], "drmbox_element_s": [6, 10], "drm_xo": [6, 10], "drm_yo": [6, 10], "label": 7, "certain": 7, "well": 7, "addit": 7, "list": [3, 9], "1000000": 9, "avoid": 9, "unexpect": 9, "gigant": 9, "checkpoint": 7, "checkpointing_r": 9, "keep": [8, 9], "overwrit": 9, "out0": 9, "out1": 9, "dure": 9, "checkpoint_path": 9, "use_checkpoint": 9, "continu": 17, "wa": 9, "readi": 9, "renam": 9, "thei": [8, 9], "our": 19, "research": 19, "ha": [8, 17, 19], "been": 19, "improv": 19, "got": 19, "publish": 19, "version": [2, 19], "evolv": 19, "long": 19, "risk": 19, "restart": 9, "superscript": [], "rayleigh": 4, "mass": 4, "bkt": 4, "bkt3": 4, "bkt3f": 4, "threshold": [4, 8], "zeta": 4, "ratio": [4, 8], "larger": [4, 8], "v_p": [8, 15], "multipli": 8, "lam\u00e9": 8, "lambda": 8, "statist": 4, "standard": [4, 9], "usual": [4, 9, 14], "window": [4, 9], "monitor_fil": 9, "monitor": 9, "job": 9, "print_matrix_k": 9, "matrix": 9, "chanc": 9, "nevertheless": [9, 14], "separ": 9, "adjust": 8, "accord": 8, "perfect": 8, "complianc": 8, "strong": 8, "tend": 8, "delta_t": [], "without": 8, "too": 8, "much": 8, "octant": [3, 13], "shift": 3, "less": 3, "fix": 3, "suffix": [], "index": [3, 8], "448": 3, "449": 3, "450": 3, "istanbul_velocity_model": 8, "basin_velocity_model": 8, "consist": [8, 14], "non": 14, "zero": 14, "even": 14, "confus": 14, "inconsist": 14, "who": 14, "But": [8, 14], "awar": 14, "miscellan": 0, "handl": 0, "level": 13, "allow": 13, "30": 13, "full": 13, "topography_directori": 13, "dig": 14, "mai": 14, "comment": 14, "about": 14, "physic": 14, "numer": 14, "construct": [2, 4, 10, 11], "rate_depend": 2, "vonmises_fa": 2, "include_incident_planewav": 10, "type_of_wav": 10, "sv": 10, "fnc_type": 10, "ricker": 10, "time_hist": 10, "planewave_strik": 10, "planewave_z_angl": 10, "fc": 10, "uo": 10, "ug_alongstrik": 10, "ug_alongnorm": 10, "no_compon": 10, "ug_timestep": 10, "include_hmg_halfspac": 10, "etreebox_xo": 10, "etreebox_yo": 10, "etreebox_lengthew": 10, "etreebox_lengthn": 10, "etreebox_depth": 10, "hmghs_v": 10, "hmghs_vp": 10, "hmghs_rho": 10, "incid": 7, "homogen": 7, "arm": 1, "m3": 1, "3d": 7, "contrast": 8, "design": 8, "3d_velocity_model": 8, "3d_velocity_model_origin_latitude_deg": 8, "3d_velocity_model_origin_longitude_deg": 8, "easier": 8, "convert": 8, "1709": 8, "769": 8, "4188": 8, "062": 8, "85": 8, "1894": 8, "495": 8, "546": 8, "898": 8, "2430": 8, "5952": 8, "642": 8, "02": 8, "17400": 8, "3400": 8, "8328": 8, "265": 8, "197": 8, "500": 8, "1743": 8, "876": 8, "4271": 8, "606": 8, "859": 8, "1920": 8, "505": 8, "4704": 8, "257": 8, "905": 8, "2625": 8, "958": 8, "6432": 8, "1577": 8, "978": 8, "3865": 8, "241": 8, "814": 8, "1840": 8, "914": 8, "4509": 8, "885": 8, "6000": 8, "2714": 8, "21": [8, 18], "6648": 8, "43": 8, "077": 8, "1609": 8, "918": 8, "3943": 8, "478": 8, "823": 8, "1861": 8, "275": 8, "4559": 8, "174": 8, "89": 8, "2712": 8, "018": 8, "6643": 8, "076": 8, "being": 8, "downward": 8, "vari": 8, "finish": 8, "move": [8, 17], "uniqu": 8, "content": 8, "appli": [8, 15], "correspond": 8, "again": [8, 17], "indic": 8, "11": 8, "fourth": [8, 15], "third": [8, 15], "fifth": 8, "eighth": 8, "forth": 8, "convers": 8, "done": 8, "easili": 8, "help": 8, "panda": 8, "python": [8, 15], "conveni": 8, "script": 8, "pd": 8, "def": 8, "converttoherculesvelocitymodel": 8, "filenam": 8, "df": 8, "read_csv": 8, "col": 8, "to_csv": 8, "header": 8, "len": 8, "drop_dupl": 8, "subset": 8, "indexseri": 8, "to_seri": 8, "__name__": 8, "__main__": 8, "herculesvelocitymodel": 8, "csv": 8, "materialfil": 8, "let": 8, "priorit": 8, "latter": 8, "won": 8, "former": 8, "satisfi": 13, "highest": 13, "elev": 13, "z_b": 13, "e_h": 13, "kind": 16, "Not": 16, "readabl": 16, "guid": 16, "rank": 15, "processor": 15, "binari": [15, 17], "hexahedr": 15, "precis": [15, 17], "numpi": [15, 17], "np": [15, 17], "rb": [15, 17], "f": [15, 17], "fromfil": [15, 17], "dtype": [15, 17], "float64": [15, 17], "reshap": 17, "Then": 15, "arrai": 15, "eight": 15, "singl": 15, "float32": 15, "mesh_coordin": 16, "mesh_data": 16, "better": 9, "respons": 18, "properli": 18, "ascii": 18, "s2": 18, "000000": 18, "000000e": 18, "00": 18, "020000": 18, "040000": 18, "060000": 18, "857821e": 18, "22": 18, "389021e": 18, "23": 18, "320382e": 18, "428910e": 18, "20": 18, "194511e": 18, "601910e": 18, "144552e": 18, "097255e": 18, "300955e": 18, "18": 18, "080000": 18, "397648e": 18, "574493e": 18, "056479e": 18, "127734e": 18, "481757e": 18, "688431e": 18, "778322e": 18, "838134e": 18, "174311e": 18, "17": 18, "100000": 18, "863683e": 18, "730192e": 18, "838559e": 18, "201724e": 18, "193821e": 18, "447519e": 18, "072487e": 18, "370998e": 18, "067975e": 18, "histori": 17, "planedisplac": 16, "awai": 17, "until": 17, "similar": 17, "number_of_time_step": 17, "number_of_grid_point": 17, "_end": [], "_time": [], "_sec": [], "_delta": [], "mathrm": [], "global": 15, "id": 15, "bit": 15, "geid": 15, "int64": 15, "entiti": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"welcom": 0, "hercul": [0, 14], "document": 0, "content": 0, "indic": 0, "tabl": 0, "compil": 1, "prerequisit": 1, "user": 1, "mk": 1, "procedur": 1, "side": 1, "note": 1, "appl": 1, "silicon": 1, "mac": 1, "analysi": 2, "nonlinear": 2, "build": 3, "damp": 4, "dimens": [5, 19], "defin": [5, 6], "domain": [5, 6], "origin": 5, "surfac": 5, "corner": 5, "drm": [5, 6], "reduct": 6, "method": 6, "implement": 6, "part": 6, "0": 6, "1": 6, "2": 6, "other": 6, "paramet": [6, 7, 14], "element": 6, "size": 6, "delta": 6, "t": 6, "simul": 6, "time": [6, 12], "print": 6, "rate": 6, "offset": 6, "boundari": 6, "input": [7, 8, 14], "file": [7, 8, 14, 16], "basic": [7, 21], "rule": 7, "you": 7, "can": 7, "find": 7, "us": 7, "follow": 7, "section": 7, "materi": 8, "One": 8, "dimension": 8, "layer": 8, "profil": 8, "istanbul": 8, "model": 8, "basin": 8, "c": 8, "output": [9, 15, 16, 17, 18], "set": 9, "mesh": [9, 15], "coordin": [9, 15], "subdomain": [9, 15], "station": [9, 18], "plane": [9, 10, 17], "misc": 8, "sourc": [11, 14], "frequenc": 12, "topographi": 13, "overview": 19, "disclaim": 19, "octre": 19, "refer": 20, "run": 21, "usag": 21, "open": 21, "mpi": 21, "checkpoint": 9, "veloc": 8, "miscellan": 14, "boolean": 14, "handl": 14, "code": 14, "wave": 10, "propag": [], "incid": 10, "homogen": 10, "half": 10, "space": 10, "3d": 8, "mesh_coordin": 15, "x": [15, 17], "mesh_data": 15, "planedisplac": 17}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"References": [[20, "references"]], "Running": [[21, "running"]], "Basic usage": [[21, "basic-usage"]], "Running with Open-MPI": [[21, "running-with-open-mpi"]], "Building": [[3, "building"]], "Domain Reduction Method (DRM) Implementation": [[6, "domain-reduction-method-drm-implementation"]], "Part 0, part 1, and part 2": [[6, "part-0-part-1-and-part-2"]], "Part 0": [[6, "part-0"]], "Part 1": [[6, "part-1"]], "Part 2": [[6, "part-2"]], "Other parameters": [[6, "other-parameters"]], "Defining the element size": [[6, "defining-the-element-size"]], "\\Delta t and simulation time for part 1": [[6, "delta-t-and-simulation-time-for-part-1"]], "Print rate": [[6, "print-rate"]], "DRM offsets": [[6, "drm-offsets"]], "DRM boundary": [[6, "drm-boundary"]], "Time and Frequency": [[12, "time-and-frequency"]], "Miscellaneous": [[14, "miscellaneous"]], "Boolean handling in Hercules\u2019 source code": [[14, "boolean-handling-in-hercules-source-code"]], "Parameter input file": [[14, "parameter-input-file"]], "Analysis": [[2, "analysis"]], "Nonlinear Analysis": [[2, "nonlinear-analysis"]], "Damping": [[4, "damping"]], "Source": [[11, "source"]], "Input file": [[7, "input-file"]], "Basic rules": [[7, "basic-rules"]], "Parameters": [[7, "parameters"]], "You can find parameters used in input files in the following sections:": [[7, null]], "Plane Waves": [[10, "plane-waves"]], "Incident Plane Waves": [[10, "incident-plane-waves"]], "Homogeneous Half-space": [[10, "homogeneous-half-space"]], "Compiling": [[1, "compiling"]], "Prerequisites": [[1, "prerequisites"]], "Compiling with user.mk": [[1, "compiling-with-user-mk"]], "Compiling procedure": [[1, "compiling-procedure"]], "Side notes for Apple Silicon Macs": [[1, "side-notes-for-apple-silicon-macs"]], "Material": [[8, "material"]], "One-dimensional layered profile": [[8, "one-dimensional-layered-profile"]], "Istanbul velocity model": [[8, "istanbul-velocity-model"]], "Basin velocity model": [[8, "basin-velocity-model"]], "Basin input file": [[8, "basin-input-file"]], "basin.c": [[8, "basin-c"]], "3D velocity model": [[8, "d-velocity-model"]], "3D velocity model input files": [[8, "d-velocity-model-input-files"]], "Misc": [[8, "misc"]], "Overview": [[19, "overview"]], "Disclaimer": [[19, "disclaimer"]], "Octree dimension": [[19, "octree-dimension"]], "Dimension": [[5, "dimension"]], "Defining the domain": [[5, "defining-the-domain"]], "Domain origin": [[5, "domain-origin"]], "Domain dimension": [[5, "domain-dimension"]], "Domain surface corners": [[5, "domain-surface-corners"]], "DRM dimensions": [[5, "drm-dimensions"]], "Welcome to Hercules\u2019 documentation!": [[0, "welcome-to-hercules-documentation"]], "Contents:": [[0, null]], "Indices and tables": [[0, "indices-and-tables"]], "Topography": [[13, "topography"]], "Output settings": [[9, "output-settings"]], "Output mesh coordinates for a subdomain": [[9, "output-mesh-coordinates-for-a-subdomain"]], "Output for stations": [[9, "output-for-stations"]], "Output for planes": [[9, "output-for-planes"]], "Checkpoint": [[9, "checkpoint"]], "Plane outputs": [[17, "plane-outputs"]], "planedisplacements.X": [[17, "planedisplacements-x"]], "Station outputs": [[18, "station-outputs"]], "Output file": [[16, "output-file"]], "Mesh coordinates output for a subdomain": [[15, "mesh-coordinates-output-for-a-subdomain"]], "mesh_coordinates.X": [[15, "mesh-coordinates-x"]], "mesh_data.X": [[15, "mesh-data-x"]]}, "indexentries": {}})