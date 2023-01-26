===============
Output settings
===============

``output_mesh``
    * Type: Boolean
    * Description: Whether Hercules should print the output information for the mesh.

``output_displacement``
    * Type: Boolean
    * Description: Whether Hercules should print the output information for the displacement.

``output_velocity``
    * Type: Boolean
    * Description: Whether Hercules should print the output information for the velocity.

``output_parallel`` (Confirmation Needed)
    * Type: Boolean
    * Description: Whether Hercules should print the output information for the parallel.

``simulation_output_rate``
    * Type: Integer
    * Description: The rate Hercules saves output data for the mesh, the displacement, and the velocity. For example, if you set :code:`simulation_output_rate = 2`, it means Hercules would store output data every 2 time steps.

``output_displacement_file``
    * Type: Path
    * Description: The path to the displacement output file.

``output_velocity_file``
    * Type: Path
    * Description: The path to the velocity output file.

``output_stats_file``
    * Type: Path
    * Description: The path to the status output file.


Output mesh coordinates for a subdomain
=======================================

You can ask Hercules to store another mesh coordinates database which includes the information only within a specified subdomain. Here are the parameters you will need to set up if you want.

``mesh_coordinates_for_matlab``
    * Type: Yes or No
    * Description: Whether to store an extra mesh coordinates database for the subdomain defined by the parameter ``mesh_corners_matlab``.

``mesh_coordinates_directory_for_matlab``
    * Type: Path
    * Description: Path to the folder where Hercules should store the mesh coordinates database for the subdomain.

``mesh_corners_matlab``
    * Type: Multiple Numbers
    * Format: ``min_x min_y max_x max_y min_z max_z``
    * Description: Values used to define the boundaries of the subdomain. Note that X is in the vertical direction of the plan view.


Output for stations
===================
The following parameters are used for the output for stations (observation points).

``number_output_stations``
    * Type: Integer
    * Description: The number of output stations.

``output_stations_print_rate``
    * Type: Integer
    * Description: The rate Hercules saves output data for stations. For example, if you set :code:`output_stations_print_rate = 2`, it means Hercules would store output data every 2 time steps.

``print_station_velocities``
    * Type: Yes or No
    * Description: Whether to print the velocities at each station.

``print_station_accelerations``
    * Type: Yes or No
    * Description: Whether to print the accelerations at each station.

``output_stations_directory``
    * Type: Path
    * Description: Path to the folder where Hercules should store the related information of stations.

``output_stations`` (Confirmation Needed)
    * Type: Multiple numbers
    * Format: ``latitude longitude depth``
    * Description: The location information of stations. The data should be written as many lines as parameter ``number_output_stations`` defines. (The difference between engineering depth and bedrock depth needs to be explained.)


Output for planes
=================
A plane contains multiple grid points storing information like displacements on them. (Confirmation Needed) (Is displacement the only information stored in the plane file)

``number_output_planes``
    * Type: Integer
    * Description: The number of output planes.

``output_planes_print_rate``
    * Type: Integer
    * Description: The rate Hercules saves output data for planes. For example, if you set :code:`output_planes_print_rate = 2`, it means Hercules would store output data every 2 time steps.

``output_planes_directory``
    * Type: Path
    * Description: Path to the folder where Hercules should store the planes database.

``output_planes`` (Confirmation Needed)
    * Type: Multiple numbers
    * Format: ``x_lat y_lon z_depth dx nx dy ny strk dp``
    * Description: Values used to define the planes. ``x_lat``, ``y_lon``, and ``z_depth`` define the origin of a plane. ``dx`` and ``dy`` are the spacing along X and Y directions. ``nx`` and ``ny`` are the number of grid points along X and Y directions. ``strk`` is the strike angle (in degree) measured from the true north clockwise, and ``dp`` is the dip angle (in degree).


Misc
====
``softening_factor`` (Confirmation Needed)
    * Type: Integer
    * Description: Softening factor for the mesh.






