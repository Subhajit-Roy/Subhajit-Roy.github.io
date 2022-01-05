import MDAnalysis as mda;
import os;
from tqdm import tqdm;
import warnings
warnings.filterwarnings("ignore")

os.chdir("./input");

file = open("../error.txt","w");

for i in tqdm(sorted(os.listdir())):

	u = mda.Universe(i);
	protein = u.select_atoms("protein");
	protein.write("../protein/protein-"+i);

	ligand = u.select_atoms("resname LIG");

	if len(ligand) == 0:
		s = u.select_atoms("name OXT");
		try:
			ligand = u.select_atoms("resid "+str(s.resids[-2]+1)+":"+str(s.resids[-1]));
		except:
			print("\n\n ID: ",i);
			file.write(str(i)+"\n")

	try:
		ligand.write("../ligand/ligand-"+i);
	except:
		print("\n\n ID: ",i);
		file.write(str(i)+"\n")

file.close()