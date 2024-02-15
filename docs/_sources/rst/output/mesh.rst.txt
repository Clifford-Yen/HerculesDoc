=======================================
Mesh coordinates output for a subdomain
=======================================

Once the parameter ``mesh_coordinates_for_matlab`` is set to ``yes`` in the parameter input file, Hercules will output the mesh coordinates and the velocity profile (material properties) of each element in a subdomain defined by the parameter ``mesh_corners_matlab``. For definition of the related parameters, see the section :ref:`Output mesh coordinates for a subdomain`.

In the folder defined by the parameter ``mesh_coordinates_directory_for_matlab``, Hercules will create files with the names ``mesh_coordinates.X`` and ``mesh_data.X`` where ``X`` is the rank number when running Hercules with MPI. For example, if the number of processors when running Hercules is 4, Hercules will create files named ``mesh_coordinates.0``, ``mesh_coordinates.1``, ``mesh_coordinates.2``, and ``mesh_coordinates.3``. The same rule applies to the file ``mesh_data.X``. Both ``mesh_coordinates.X`` and ``mesh_data.X`` are binary files. 

mesh_coordinates.X
------------------
Hercules writes the coordinates of each node in the subdomain sequentially. The first three numbers are the x, y, and z coordinates of the first node of the first element. The next three numbers are the x, y, and z coordinates of the second node of the first element, and so on. Hercules uses 8-node hexahedral elements, and the coordinates of the nodes are written in double precision.

To read the file ``mesh_coordinates.X`` (``mesh_coordinates.0``, for example), you can use the following Python code:

.. code-block:: python

    import numpy as np
    with open('mesh_coordinates.0', 'rb') as f:
        data = np.fromfile(f, dtype=np.float64)
        data = data.reshape(-1, 3)

Then for each row in the array ``data``, the first, second, and third numbers are the x, y, and z coordinates of the node, respectively. The first eight rows are the coordinates of the eight nodes of the first element, the next eight rows are the coordinates of the eight nodes of the second element, and so on.


mesh_data.X
-----------
Hercules writes the velocity profile of each element in the subdomain sequentially. The first three numbers are :math:`V_s`, :math:`V_p`, and :math:`\rho` of the first element. The next three numbers are :math:`V_s`, :math:`V_p`, and :math:`\rho` of the second element, and so on. The velocity profile of each element is written in single precision.

To read the file ``mesh_data.X`` (``mesh_data.0``, for example), you can use the following Python code:

.. code-block:: python

    import numpy as np
    with open('mesh_data.0', 'rb') as f:
        data = np.fromfile(f, dtype=np.float32)
        data = data.reshape(-1, 3)

Then for each row in the array ``data``, the first, second, and third numbers are :math:`V_s`, :math:`V_p`, and :math:`\rho` of the element, respectively. The first row is the velocity profile of the first element, the next row is the velocity profile of the second element, and so on.